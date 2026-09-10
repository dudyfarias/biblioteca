(function () {
  "use strict";

  document.querySelectorAll("[data-classification-trail]").forEach((root) => {
    const steps = root.querySelector("ol");
    const status = root.querySelector('[role="status"]');
    const desktop = window.matchMedia("(min-width: 721px)");
    const mobile = window.matchMedia("(max-width: 720px)");
    const fields = Array.from(root.querySelectorAll("li[data-trail-field]"), (item) => {
      const button = item.querySelector("button");
      const [panelId, mobilePanelId] = button.getAttribute("aria-controls").split(/\s+/);
      return {
        item,
        button,
        name: button.querySelector("strong").textContent,
        panel: document.getElementById(panelId),
        mobilePanel: document.getElementById(mobilePanelId),
      };
    });
    const initial = fields.findIndex(({ button }) => button.getAttribute("aria-pressed") === "true");
    let selected = initial < 0 ? null : initial;

    function render() {
      fields.forEach(({ item, button, panel, mobilePanel }, index) => {
        const active = index === selected;
        item.classList.toggle("is-selected", active);
        button.setAttribute("aria-pressed", String(active));
        button.setAttribute("aria-expanded", String(active));
        mobilePanel.hidden = !active;
        panel.hidden = index !== (selected ?? 0);
      });
      const message = selected === null ? "Explicação recolhida" : `Campo selecionado: ${fields[selected].name}`;
      if (status.textContent !== message) status.textContent = message;
    }

    fields.forEach(({ button }, index) => {
      button.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "mouse" || !desktop.matches || steps.querySelector(":focus-visible")) return;
        selected = index;
        render();
      });
      button.addEventListener("focus", () => {
        if (!desktop.matches || !button.matches(":focus-visible")) return;
        selected = index;
        render();
      });
      button.addEventListener("click", () => {
        selected = mobile.matches && selected === index ? null : index;
        render();
      });
      button.addEventListener("keydown", (event) => {
        if (!desktop.matches) return;
        const last = fields.length - 1;
        const next = event.key === "ArrowRight" ? Math.min(index + 1, last)
          : event.key === "ArrowLeft" ? Math.max(index - 1, 0)
          : event.key === "Home" ? 0
          : event.key === "End" ? last
          : null;
        if (next === null) return;
        event.preventDefault();
        fields[next].button.focus();
      });
    });

    desktop.addEventListener("change", (event) => {
      if (event.matches) {
        selected = selected ?? 0;
        render();
      }
    });

    render();
  });

  document.querySelectorAll(".method-jumpnav").forEach((nav) => {
    const links = Array.from(nav.querySelectorAll('a[href^="#"]'), (link) => ({
      link,
      section: document.getElementById(link.getAttribute("href").slice(1)),
    }));
    if (!links.length) return;
    let frame = 0;

    function update() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const threshold = Math.max(120, nav.getBoundingClientRect().bottom + 40);
        let current = links[0];
        links.forEach((item) => {
          if ((item.section?.getBoundingClientRect().top ?? Infinity) <= threshold) current = item;
        });
        links.forEach((item) => {
          if (item === current) item.link.setAttribute("aria-current", "location");
          else item.link.removeAttribute("aria-current");
        });
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  });

  function normalizeSearch(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();
  }

  document.querySelectorAll(".method-subject-browser").forEach((root) => {
    const input = root.querySelector(".method-subject-input");
    const clear = root.querySelector(".method-subject-clear");
    const counter = root.querySelector(".method-subject-count");
    const toggle = root.querySelector(".method-subject-more");
    const empty = root.querySelector(".method-subject-empty");
    const reset = root.querySelector(".method-subject-reset");
    const subjects = Array.from(root.querySelectorAll("details.method-subject"), (item) => ({
      item,
      searchable: [
        item.querySelector(".method-subject-name").textContent,
        item.querySelector(".method-subject-summary").textContent,
        item.querySelector(".method-subject-body p").textContent,
        item.dataset.subjectFocus,
      ].map(normalizeSearch),
    }));
    const total = subjects.length;
    let expanded = toggle.getAttribute("aria-expanded") === "true";

    function render() {
      const isSearching = input.value !== "";
      const query = normalizeSearch(input.value);
      const matching = subjects.filter(({ searchable }) => searchable.some((value) => value.includes(query)));
      const visible = new Set(isSearching || expanded ? matching : matching.slice(0, 6));

      subjects.forEach((subject) => {
        subject.item.hidden = !visible.has(subject);
        // React removes filtered entries, so their native open state also resets.
        if (subject.item.hidden) subject.item.open = false;
      });
      clear.hidden = !isSearching;
      empty.hidden = matching.length !== 0;
      toggle.hidden = isSearching || total <= 6;
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.textContent = expanded ? "Mostrar menos" : `Ver os ${total} assuntos`;
      counter.textContent = isSearching || !expanded
        ? `${visible.size} de ${total} assuntos`
        : `${total} assuntos`;
    }

    function clearSearch() {
      input.value = "";
      render();
      input.focus();
    }

    input.addEventListener("input", render);
    clear.addEventListener("click", clearSearch);
    reset.addEventListener("click", clearSearch);
    toggle.addEventListener("click", (event) => {
      const focusRevealed = !expanded && event.detail === 0;
      expanded = !expanded;
      render();
      if (focusRevealed) subjects[6]?.item.querySelector("summary")?.focus();
    });

    render();
  });
})();
