(function () {
  "use strict";

  const collections = [
    "Eventos",
    "Livros Digitais",
    "Materiais Pedagógicos",
    "Trabalhos Acadêmicos",
  ];

  const typesByCollection = {
    Eventos: ["Apresentações", "Artigos de eventos", "Resumos", "Resumos expandidos"],
    "Livros Digitais": ["Livro no todo", "Capítulo de livro", "Parte de livro"],
    "Materiais Pedagógicos": [
      "Apostila", "Aulas", "Cursos", "Manuais", "Relatórios", "Slides",
      "Textos de discussão", "Tutoriais", "Vídeos", "Artigos", "Guias",
      "Nota Técnica", "Enunciados", "Documentos normativos",
    ],
    "Trabalhos Acadêmicos": [
      "Dissertações", "Memoriais docentes", "TCCs", "Teses",
      "Artigos de periódicos", "Monografias",
    ],
  };

  const subjects = [
    "Aspectos Jurídicos e Regulatórios",
    "Controle, Auditoria e Combate à Corrupção",
    "Gestão de Competências",
    "Governança",
    "Inovação e Tecnologia",
    "Materiais",
    "Obras e Serviços de Engenharia",
    "Sanções Administrativas",
    "Serviços",
    "Sistemas",
    "Sustentabilidade e ODS",
    "TIC",
    "Transparência",
  ];

  const categoryTree = {
    "Plano Anual de Contratações (PCA)": {
      "Plano Anual de Contratações (PCA)": [],
    },
    "Contratação Todas as Fases": {
      "Contratação Todas as Fases": [],
    },
    "Planejamento/Fase Preparatória": {
      "Planejamento/Fase Preparatória": [],
      "Fase Preparatória - ETP": [],
      "Fase Preparatória - TR": [],
      "Fase Preparatória - Gestão de Riscos": [
        "Fase Preparatória - Gestão de Riscos",
        "Mapa de Riscos",
        "Matriz de Alocação de Riscos",
      ],
      "Fase Preparatória - Pesquisa de Preços": [],
    },
    "Seleção do Fornecedor": {
      "Seleção do Fornecedor": [],
      Licitação: ["Licitação", "Concorrência", "Pregão", "Leilão", "Diálogo Competitivo"],
      "Contratação Direta": [
        "Contratação Direta",
        "Inexigibilidade",
        "Emergência - Inciso VIII",
        "Dispensa por Valor (Art 75)",
        "Contratação Direta outros incisos",
      ],
      "Procedimentos Auxiliares": [
        "Procedimentos Auxiliares",
        "Credenciamento",
        "Registro de Preços (RP)",
        "Pré-qualificação",
        "PMI",
        "Registro Cadastral",
      ],
    },
    "Gestão de Contratos": {
      "Gestão de Contratos": [],
      "Fiscalização de Contratos": [],
    },
    "Gestão de RP": { "Gestão de RP": [] },
    "Gestão do Credenciamento": { "Gestão do Credenciamento": [] },
    "Conteúdos Transversais": {
      "Catálogo eletrônico de Padronização": [],
      "Compras centralizadas/compartilhadas": [],
      Transparência: [],
      Sistema: [],
      "Gestão de Competências": [],
      "Inovação e Tecnologia": [],
      "Sustentabilidade e ODS": [],
      "Controle, Auditoria e Combate à Corrupção": [],
      Governança: [],
      Serviços: [],
      Materiais: [],
      "Obras e Serviços de Engenharia": [],
      "Sanções Administrativas": [],
      "Micro e Pequenas empresas": [],
      "Logística e Gestão de Suprimentos": [],
      Integridade: [],
    },
  };

  const documents = [
    {
      collection: "Materiais Pedagógicos",
      type: "Manuais",
      subject: "Aspectos Jurídicos e Regulatórios",
      category: "Conteúdos Transversais",
      subcategory: "Governança",
      title: "Boletim de Jurisprudência - Edição 1",
      author: "Tribunal de Contas do Estado de São Paulo",
      year: "2021",
      tags: ["Boletim", "Licitações", "Contratos", "TCE"],
      summary: "Boletim mensal sobre entendimentos da Corte e impactos da Nova Lei de Licitações.",
      access: "Aberto",
    },
    {
      collection: "Trabalhos Acadêmicos",
      type: "Artigos de periódicos",
      subject: "Sustentabilidade e ODS",
      category: "Seleção do Fornecedor",
      subcategory: "Licitação",
      microcategory: "Licitação",
      title: "Objetivos e desafios da política de compras públicas sustentáveis no Brasil",
      author: "Couto, Hugo Leonnardo Gomides do",
      year: "2016",
      tags: ["Compras Sustentáveis", "ODS", "Licitação"],
      summary: "Analisa objetivos e desafios da política de compras públicas sustentáveis no Brasil.",
      access: "Aberto",
    },
    {
      collection: "Trabalhos Acadêmicos",
      type: "Artigos de periódicos",
      subject: "Governança",
      category: "Seleção do Fornecedor",
      subcategory: "Licitação",
      microcategory: "Pregão",
      title: "Função compras no setor público: desafios para a celeridade dos pregões eletrônicos",
      author: "Almeida, Alessandro Anibal Martins de",
      year: "2018",
      tags: ["Pregão", "Administração Pública"],
      summary: "Avalia prazos e fatores que afetam a eficiência dos processos de compras públicas.",
      access: "Aberto",
    },
    {
      collection: "Trabalhos Acadêmicos",
      type: "Artigos de periódicos",
      subject: "Materiais",
      category: "Conteúdos Transversais",
      subcategory: "Logística e Gestão de Suprimentos",
      title: "A contribuição da logística integrada às decisões de gestão das políticas públicas",
      author: "Vaz, José Carlos",
      year: "2011",
      tags: ["Logística Pública", "Gestão Pública"],
      summary: "Sistematiza componentes logísticos relevantes para a gestão pública brasileira.",
      access: "Aberto",
    },
    {
      collection: "Livros Digitais",
      type: "Livro no todo",
      subject: "Materiais",
      category: "Contratação Todas as Fases",
      subcategory: "Contratação Todas as Fases",
      title: "Public procurement re-examined",
      author: "Thai, Khi V.",
      year: "2001",
      tags: ["Compras Públicas", "Governança"],
      summary: "Obra de referência sobre os elementos sistêmicos das compras públicas.",
      access: "Aberto",
    },
    {
      collection: "Materiais Pedagógicos",
      type: "Apostila",
      subject: "Materiais",
      category: "Conteúdos Transversais",
      subcategory: "Logística e Gestão de Suprimentos",
      title: "Fundamentos da gestão da logística pública e teoria geral de licitação e contratos",
      author: "Lino, Gustavo",
      year: "2013",
      tags: ["Logística Pública", "ENAP"],
      summary: "Apostila para capacitação de servidores em logística pública e contratos.",
      access: "Aberto",
    },
    {
      collection: "Trabalhos Acadêmicos",
      type: "Artigos de periódicos",
      subject: "Sustentabilidade e ODS",
      category: "Seleção do Fornecedor",
      subcategory: "Licitação",
      microcategory: "Licitação",
      title: "Compras públicas como política para o desenvolvimento sustentável",
      author: "Oliveira, Bernardo Carlos S. C. M. de",
      year: "2015",
      tags: ["Sustentabilidade", "ODS"],
      summary: "Investiga o uso estratégico do poder de compra estatal no desenvolvimento sustentável.",
      access: "Aberto",
    },
    {
      collection: "Trabalhos Acadêmicos",
      type: "Artigos de periódicos",
      subject: "TIC",
      category: "Contratação Todas as Fases",
      subcategory: "Contratação Todas as Fases",
      title: "Blockchain technology and sustainable supply chain management",
      author: "Saberi, Sara",
      year: "2019",
      tags: ["Blockchain", "TIC", "Sustentabilidade"],
      summary: "Analisa rastreabilidade e inovação tecnológica em cadeias de suprimentos.",
      access: "Restrito",
    },
    {
      collection: "Trabalhos Acadêmicos",
      type: "Artigos de periódicos",
      subject: "Aspectos Jurídicos e Regulatórios",
      category: "Seleção do Fornecedor",
      subcategory: "Contratação Direta",
      microcategory: "Emergência - Inciso VIII",
      title: "Compras públicas na pandemia: experiências estaduais no enfrentamento à Covid-19",
      author: "Rufino Filho, Edgard Tavares",
      year: "2024",
      tags: ["Contratação Direta", "Emergência", "Transparência"],
      summary: "Compara contratações emergenciais estaduais durante a resposta sanitária.",
      access: "Aberto",
    },
    {
      collection: "Livros Digitais",
      type: "Capítulo de livro",
      subject: "Sustentabilidade e ODS",
      category: "Contratação Todas as Fases",
      subcategory: "Contratação Todas as Fases",
      title: "Compras públicas como indutora do desenvolvimento sustentável",
      author: "Rosario, Estefany Laiana Costa do",
      year: "2023",
      tags: ["ODS", "Registro de Preços", "Sustentabilidade"],
      summary: "Discute critérios de sustentabilidade aplicáveis às contratações públicas.",
      access: "Aberto",
    },
  ];

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character];
    });
  }

  function setupHome() {
    const form = document.querySelector("[data-home-search]");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = form.querySelector("input").value.trim();
      window.location.href = "acervo.html?q=" + encodeURIComponent(query);
    });

    document.querySelectorAll("[data-query]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.location.href = "acervo.html?q=" + encodeURIComponent(button.dataset.query);
      });
    });
  }

  function setupCatalog() {
    const state = {
      query: "",
      collection: new Set(),
      type: new Set(),
      subject: new Set(),
      category: new Set(),
      subcategory: new Set(),
      microcategory: new Set(),
    };

    const parameters = new URLSearchParams(window.location.search);
    const queryInput = document.getElementById("catalog-query");
    state.query = parameters.get("q") || "";
    queryInput.value = state.query;
    if (parameters.get("colecao")) state.collection.add(parameters.get("colecao"));

    const elements = {
      collection: document.getElementById("filter-colecao"),
      type: document.getElementById("filter-tipo"),
      subject: document.getElementById("filter-assunto"),
      category: document.getElementById("filter-categoria"),
      subcategory: document.getElementById("filter-subcategoria"),
      microcategory: document.getElementById("filter-microcategoria"),
      results: document.getElementById("document-results"),
      count: document.getElementById("results-count"),
      clear: document.getElementById("clear-filters"),
      activeCount: document.getElementById("active-count"),
      queryIndicator: document.getElementById("query-indicator"),
      sort: document.getElementById("sort-documents"),
    };

    function checkbox(value, group) {
      const id = "filter-" + group + "-" + normalize(value).replace(/[^a-z0-9]+/g, "-");
      const selected = state[group].has(value) ? " checked" : "";
      return '<label class="filter-option" for="' + id + '"><input id="' + id +
        '" type="checkbox" data-group="' + group + '" value="' + escapeHtml(value) + '"' +
        selected + "><span>" + escapeHtml(value) + "</span></label>";
    }

    function bindCheckboxes(container) {
      container.querySelectorAll("input[data-group]").forEach(function (input) {
        input.addEventListener("change", function () {
          const selection = state[input.dataset.group];
          if (input.checked) selection.add(input.value);
          else selection.delete(input.value);
          if (input.dataset.group === "category" || input.dataset.group === "subcategory") {
            renderHierarchy();
          }
          applyFilters();
        });
      });
    }

    function renderBaseFilters() {
      elements.collection.innerHTML = collections.map(function (item) {
        return checkbox(item, "collection");
      }).join("");
      elements.subject.innerHTML = subjects.map(function (item) {
        return checkbox(item, "subject");
      }).join("");
      elements.category.innerHTML = Object.keys(categoryTree).map(function (item) {
        return checkbox(item, "category");
      }).join("");

      elements.type.innerHTML = Object.keys(typesByCollection).map(function (collection) {
        const options = typesByCollection[collection].map(function (item) {
          return checkbox(item, "type");
        }).join("");
        return "<details><summary>" + escapeHtml(collection) +
          '</summary><div class="details-options">' + options + "</div></details>";
      }).join("");
      [elements.collection, elements.type, elements.subject, elements.category].forEach(bindCheckboxes);
    }

    function renderHierarchy() {
      const availableSubcategories = [];
      state.category.forEach(function (category) {
        Object.keys(categoryTree[category] || {}).forEach(function (subcategory) {
          availableSubcategories.push({ category: category, value: subcategory });
        });
      });
      const allowedSubcategories = new Set(availableSubcategories.map(function (item) { return item.value; }));
      state.subcategory.forEach(function (selected) {
        if (!allowedSubcategories.has(selected)) state.subcategory.delete(selected);
      });

      if (availableSubcategories.length) {
        elements.subcategory.innerHTML = '<p class="nested-label">Subcategorias</p>' +
          availableSubcategories.map(function (item) {
            return checkbox(item.value, "subcategory");
          }).join("");
        bindCheckboxes(elements.subcategory);
      } else {
        elements.subcategory.innerHTML = "";
      }

      const availableMicrocategories = [];
      state.category.forEach(function (category) {
        state.subcategory.forEach(function (subcategory) {
          const entries = (categoryTree[category] || {})[subcategory] || [];
          entries.forEach(function (microcategory) {
            availableMicrocategories.push(microcategory);
          });
        });
      });
      const allowedMicrocategories = new Set(availableMicrocategories);
      state.microcategory.forEach(function (selected) {
        if (!allowedMicrocategories.has(selected)) state.microcategory.delete(selected);
      });

      if (availableMicrocategories.length) {
        elements.microcategory.innerHTML = '<p class="nested-label">Microcategorias</p>' +
          availableMicrocategories.map(function (item) {
            return checkbox(item, "microcategory");
          }).join("");
        bindCheckboxes(elements.microcategory);
      } else {
        elements.microcategory.innerHTML = "";
      }
    }

    function containsSelection(set, value) {
      return set.size === 0 || set.has(value);
    }

    function renderDocument(documentItem) {
      const access = documentItem.access === "Restrito"
        ? '<span class="badge restricted">Restrito</span>'
        : "";
      return '<article class="result-card">' +
        '<div class="result-card-header"><div class="labels"><span class="badge">' +
        escapeHtml(documentItem.collection) + "</span>" + access + "</div></div>" +
        "<h2>" + escapeHtml(documentItem.title) + "</h2>" +
        "<p>" + escapeHtml(documentItem.summary) + "</p>" +
        '<div class="result-meta"><span>' + escapeHtml(documentItem.author) + "</span><span>" +
        escapeHtml(documentItem.type) + "</span><span>" + escapeHtml(documentItem.year) +
        "</span></div></article>";
    }

    function applyFilters() {
      const query = normalize(state.query);
      let matching = documents.filter(function (documentItem) {
        const searchable = normalize([
          documentItem.title, documentItem.author, documentItem.subject,
          documentItem.category, documentItem.subcategory, documentItem.microcategory,
          documentItem.tags.join(" "),
        ].join(" "));
        return (!query || searchable.includes(query)) &&
          containsSelection(state.collection, documentItem.collection) &&
          containsSelection(state.type, documentItem.type) &&
          containsSelection(state.subject, documentItem.subject) &&
          containsSelection(state.category, documentItem.category) &&
          containsSelection(state.subcategory, documentItem.subcategory) &&
          containsSelection(state.microcategory, documentItem.microcategory);
      });

      if (elements.sort.value === "title") {
        matching.sort(function (a, b) { return a.title.localeCompare(b.title, "pt-BR"); });
      } else {
        matching.sort(function (a, b) { return Number(b.year) - Number(a.year); });
      }

      elements.count.textContent = matching.length + (matching.length === 1 ? " documento" : " documentos");
      elements.results.innerHTML = matching.length
        ? matching.map(renderDocument).join("")
        : '<div class="empty-state"><div><strong>Nenhum documento encontrado</strong><p>Tente outros filtros ou termos de pesquisa para ampliar a busca.</p></div></div>';

      const active = ["collection", "type", "subject", "category", "subcategory", "microcategory"]
        .reduce(function (total, group) { return total + state[group].size; }, 0);
      elements.clear.hidden = active === 0;
      elements.activeCount.textContent = active;
      elements.queryIndicator.hidden = !state.query;
      elements.queryIndicator.innerHTML = state.query
        ? 'Pesquisa por <strong>"' + escapeHtml(state.query) + '"</strong>'
        : "";
    }

    document.getElementById("catalog-search").addEventListener("submit", function (event) {
      event.preventDefault();
      state.query = queryInput.value.trim();
      applyFilters();
    });

    elements.sort.addEventListener("change", applyFilters);
    elements.clear.addEventListener("click", function () {
      ["collection", "type", "subject", "category", "subcategory", "microcategory"].forEach(function (group) {
        state[group].clear();
      });
      renderBaseFilters();
      renderHierarchy();
      applyFilters();
    });

    renderBaseFilters();
    renderHierarchy();
    applyFilters();
  }

  if (document.body.dataset.page === "home") setupHome();
  if (document.body.dataset.page === "acervo") setupCatalog();
}());
