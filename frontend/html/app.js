(function () {
  "use strict";

  const collections = [
    "Jurisprudência",
    "Trabalhos Acadêmicos",
    "Doutrina e Conteúdo Técnico",
    "Instrução e Capacitação"
  ];

  const natures = [
    "Material",
    "Serviços",
    "Obras e Serviços de Engenharia",
    "TIC"
  ];

  const typesByCollection = {
    "Jurisprudência": [
      "Súmulas",
      "Boletins",
      "Acórdãos",
      "Deliberações"
    ],
    "Trabalhos Acadêmicos": [
      "Teses",
      "Dissertações",
      "Monografias",
      "TCCs",
      "Memoriais Docentes"
    ],
    "Doutrina e Conteúdo Técnico": [
      "Livros digitais",
      "Artigos",
      "Notas Técnicas",
      "Relatórios",
      "Textos de Discussão",
      "Resumos",
      "Resumos expandidos",
      "Enunciados",
      "Pareceres"
    ],
    "Instrução e Capacitação": [
      "Manuais",
      "Guias",
      "Tutoriais",
      "Apostilas",
      "Aulas",
      "Cursos",
      "Slides"
    ]
  };

  const subjects = [
    "Aspectos Jurídicos e Regulatórios",
    "Governança",
    "Inovação e Tecnologia",
    "Sustentabilidade e ODS",
    "Controle, Auditoria e Combate à Corrupção",
    "Gestão de Competências",
    "Logística e Gestão de Suprimentos",
    "Compras Centralizadas/compartilhadas",
    "Transparência",
    "Integridade",
    "Micro e Pequenas Empresas",
    "Uso de Sistemas",
    "Sanções Administrativas",
    "Catálogo eletrônico de Padronização"
  ];

  const categoryTree = {
    "Plano Anual de Contratações (PCA)": {
      "Plano Anual de Contratações (PCA)": []
    },
    "Contratação Todas as Fases": {
      "Contratação Todas as Fases": []
    },
    "Planejamento/Fase Preparatória": {
      "Planejamento/Fase Preparatória": [],
      "Fase Preparatória - ETP": [],
      "Fase Preparatória - TR": [],
      "Fase Preparatória - Gestão de Riscos": [
        "Fase Preparatória - Gestão de Riscos",
        "Mapa de Riscos",
        "Matriz de Alocação de Riscos"
      ],
      "Fase Preparatória - Pesquisa de Preços": []
    },
    "Seleção do Fornecedor": {
      "Seleção do Fornecedor": [],
      "Licitação": [
        "Licitação",
        "Concorrência",
        "Pregão",
        "Leilão",
        "Diálogo Competitivo"
      ],
      "Contratação Direta": [
        "Contratação Direta",
        "Inexigibilidade",
        "Emergência - Inciso VIII",
        "Dispensa por Valor (Art 75)",
        "Contratação Direta outros incisos"
      ]
    },
    "Procedimentos Auxiliares": {
      "Credenciamento": [],
      "Registro de Preços": [],
      "Pré-qualificação": [],
      "PMI": [],
      "Registro Cadastral": []
    },
    "Gestão de Contratos": {
      "Gestão de Contratos": [],
      "Fiscalização de Contratos": []
    },
    "Gestão de RP": {
      "Gestão de RP": []
    },
    "Gestão do Credenciamento": {
      "Gestão do Credenciamento": []
    },
    "Conteúdos Transversais": {
      "Catálogo eletrônico de Padronização": [],
      "Compras centralizadas/compartilhadas": [],
      "Transparência": [],
      "Sistema": [],
      "Gestão de Competências": [],
      "Inovação e Tecnologia": [],
      "Sustentabilidade e ODS": [],
      "Controle, Auditoria e Combate à Corrupção": [],
      "Governança": [],
      "Serviços": [],
      "Materiais": [],
      "Obras e Serviços de Engenharia": [],
      "Sanções Administrativas": [],
      "Micro e Pequenas empresas": [],
      "Logística e Gestão de Suprimentos": [],
      "Integridade": []
    }
  };

  const documents = [
    {
      "id": 1,
      "collection": "Jurisprudência",
      "type": "Boletins",
      "subject": "Aspectos Jurídicos e Regulatórios",
      "category": "Conteúdos Transversais",
      "subcategory": "Governança",
      "title": "Boletim de Jurisprudência — Edição 1",
      "author": "Tribunal de Contas do Estado de São Paulo",
      "year": "2021",
      "tags": [
        "Boletim",
        "Licitações",
        "Contratos",
        "NLLC",
        "TCE-SP"
      ],
      "summary": "Boletim mensal sobre os entendimentos da Corte, alterações e impactos da Nova Lei de Licitações.",
      "access": "Aberto"
    },
    {
      "id": 2,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Artigos",
      "subject": "Sustentabilidade e ODS",
      "category": "Seleção do Fornecedor",
      "subcategory": "Licitação",
      "microcategory": "Licitação",
      "title": "Objetivos e desafios da política de compras públicas sustentáveis no Brasil: a opinião dos especialistas",
      "author": "Couto, Hugo Leonnardo Gomides do",
      "year": "2016",
      "tags": [
        "Compras Sustentáveis",
        "Sustentabilidade",
        "Políticas Públicas",
        "Licitação"
      ],
      "summary": "Analisa, a partir da opinião de especialistas, objetivos e desafios da política de compras públicas sustentáveis no Brasil, discutindo obstáculos e possibilidades de implementação na administração pública.",
      "access": "Aberto"
    },
    {
      "id": 3,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Artigos",
      "subject": "Governança",
      "category": "Seleção do Fornecedor",
      "subcategory": "Licitação",
      "microcategory": "Pregão",
      "title": "Função compras no setor público: desafios para o alcance da celeridade dos pregões eletrônicos",
      "author": "Almeida, Alessandro Anibal Martins de",
      "year": "2018",
      "tags": [
        "Pregão Eletrônico",
        "Celeridade",
        "Administração Pública Federal"
      ],
      "summary": "Analisa prazos e fatores que afetam a celeridade dos processos de compras no âmbito da administração pública federal, com foco em pregões eletrônicos.",
      "access": "Aberto"
    },
    {
      "id": 4,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Artigos",
      "subject": "Logística e Gestão de Suprimentos",
      "category": "Conteúdos Transversais",
      "subcategory": "Logística e Gestão de Suprimentos",
      "title": "A contribuição da logística integrada às decisões de gestão das políticas públicas no Brasil",
      "author": "Vaz, José Carlos",
      "year": "2011",
      "tags": [
        "Logística Pública",
        "Políticas Públicas",
        "Gestão Pública"
      ],
      "summary": "Identifica e sistematiza componentes logísticos da gestão de políticas públicas, analisando sua importância para decisões de gestão no setor público brasileiro.",
      "access": "Aberto"
    },
    {
      "id": 5,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Livros digitais",
      "typeDetail": "Livro no todo",
      "subject": "Governança",
      "category": "Contratação Todas as Fases",
      "subcategory": "Contratação Todas as Fases",
      "title": "Public procurement re-examined",
      "author": "Thai, Khi V.",
      "year": "2001",
      "tags": [
        "Compras Públicas",
        "Sistemas de Compras",
        "Governança"
      ],
      "summary": "Obra de referência que reexamina o campo das compras públicas por abordagem sistêmica e discute elementos do sistema de procurement.",
      "access": "Aberto"
    },
    {
      "id": 6,
      "collection": "Instrução e Capacitação",
      "type": "Apostilas",
      "subject": "Logística e Gestão de Suprimentos",
      "category": "Conteúdos Transversais",
      "subcategory": "Logística e Gestão de Suprimentos",
      "title": "Fundamentos da gestão da logística pública e teoria geral de licitação e contratos",
      "author": "Lino, Gustavo",
      "year": "2013",
      "tags": [
        "Logística Pública",
        "Licitação",
        "Contratos",
        "ENAP"
      ],
      "summary": "Apostila da ENAP sobre fundamentos da gestão da logística pública e teoria geral de licitação e contratos.",
      "access": "Aberto"
    },
    {
      "id": 7,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Artigos",
      "subject": "Sustentabilidade e ODS",
      "category": "Seleção do Fornecedor",
      "subcategory": "Licitação",
      "microcategory": "Licitação",
      "title": "Compras públicas como política para o desenvolvimento sustentável",
      "author": "Oliveira, Bernardo Carlos S. C. M. de",
      "year": "2015",
      "tags": [
        "Compras Públicas",
        "Desenvolvimento Sustentável",
        "Poder de Compra do Estado"
      ],
      "summary": "Estuda como o Estado pode contribuir para o desenvolvimento sustentável por meio de seu poder de compra e das compras públicas.",
      "access": "Aberto"
    },
    {
      "id": 8,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Artigos",
      "subject": "Inovação e Tecnologia",
      "category": "Contratação Todas as Fases",
      "subcategory": "Contratação Todas as Fases",
      "title": "Blockchain technology and its relationships to sustainable supply chain management",
      "author": "Saberi, Sara",
      "year": "2019",
      "tags": [
        "Blockchain",
        "Cadeia de Suprimentos",
        "Sustentabilidade",
        "TIC"
      ],
      "summary": "Analisa a relação entre tecnologia blockchain e gestão sustentável da cadeia de suprimentos, discutindo barreiras e agenda de pesquisa.",
      "access": "Restrito"
    },
    {
      "id": 9,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Artigos",
      "subject": "Aspectos Jurídicos e Regulatórios",
      "category": "Seleção do Fornecedor",
      "subcategory": "Contratação Direta",
      "microcategory": "Emergência - Inciso VIII",
      "title": "Compras públicas na pandemia: experiências estaduais no enfrentamento à Covid-19",
      "author": "Rufino Filho, Edgard Tavares",
      "year": "2024",
      "tags": [
        "Covid-19",
        "Contratações Emergenciais",
        "Saúde Pública"
      ],
      "summary": "Compara compras públicas realizadas por entes estaduais em resposta à pandemia de Covid-19 nas áreas da saúde.",
      "access": "Aberto"
    },
    {
      "id": 10,
      "collection": "Doutrina e Conteúdo Técnico",
      "type": "Livros digitais",
      "typeDetail": "Capítulo de livro",
      "subject": "Sustentabilidade e ODS",
      "category": "Contratação Todas as Fases",
      "subcategory": "Contratação Todas as Fases",
      "title": "Compras públicas como indutora do desenvolvimento sustentável",
      "author": "Rosario, Estefany Laiana Costa do",
      "year": "2023",
      "tags": [
        "Compras Públicas",
        "Sustentabilidade",
        "ODS"
      ],
      "summary": "Discute como as compras públicas podem induzir o desenvolvimento sustentável e contribuir para objetivos de produção, consumo e cidades sustentáveis.",
      "access": "Aberto"
    }
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
    document.querySelectorAll("[data-subject]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.location.href = "acervo.html?assunto=" + encodeURIComponent(button.dataset.subject);
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
      nature: new Set(),
    };

    const parameters = new URLSearchParams(window.location.search);
    const queryInput = document.getElementById("catalog-query");
    state.query = parameters.get("q") || "";
    queryInput.value = state.query;
    parameters.getAll("colecao").filter(function (value) { return collections.includes(value); })
      .forEach(function (value) { state.collection.add(value); });
    parameters.getAll("assunto").filter(function (value) { return subjects.includes(value); })
      .forEach(function (value) { state.subject.add(value); });

    const elements = {
      collection: document.getElementById("filter-colecao"),
      type: document.getElementById("filter-tipo"),
      subject: document.getElementById("filter-assunto"),
      category: document.getElementById("filter-categoria"),
      subcategory: document.getElementById("filter-subcategoria"),
      microcategory: document.getElementById("filter-microcategoria"),
      nature: document.getElementById("filter-natureza"),
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
      elements.nature.innerHTML = natures.map(function (item) {
        return checkbox(item, "nature");
      }).join("");

      elements.type.innerHTML = Object.keys(typesByCollection).map(function (collection) {
        const options = typesByCollection[collection].map(function (item) {
          return checkbox(item, "type");
        }).join("");
        return "<details><summary>" + escapeHtml(collection) +
          '</summary><div class="details-options">' + options + "</div></details>";
      }).join("");
      [elements.collection, elements.type, elements.subject, elements.category, elements.nature].forEach(bindCheckboxes);
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
      const typeInfo = documentItem.typeDetail
        ? documentItem.type + " (" + documentItem.typeDetail + ")"
        : documentItem.type;
      const access = documentItem.access === "Restrito"
        ? '<span class="badge restricted">Restrito</span>'
        : "";
      return '<article class="result-card">' +
        '<div class="result-card-header"><div class="labels"><span class="badge">' +
        escapeHtml(documentItem.collection) + "</span>" + access + "</div></div>" +
        "<h2>" + escapeHtml(documentItem.title) + "</h2>" +
        "<p>" + escapeHtml(documentItem.summary) + "</p>" +
        '<div class="result-meta"><span>' + escapeHtml(documentItem.author) + "</span><span>" +
        escapeHtml(typeInfo) + "</span><span>" + escapeHtml(documentItem.year) +
        "</span></div></article>";
    }

    function applyFilters() {
      const query = normalize(state.query);
      let matching = documents.filter(function (documentItem) {
        const searchable = normalize([
          documentItem.title, documentItem.author, documentItem.subject,
          documentItem.category, documentItem.subcategory, documentItem.microcategory,
          documentItem.summary, documentItem.collection, documentItem.type, documentItem.nature,
          documentItem.tags.join(" "),
        ].join(" "));
        return (!query || searchable.includes(query)) &&
          containsSelection(state.collection, documentItem.collection) &&
          containsSelection(state.type, documentItem.type) &&
          containsSelection(state.subject, documentItem.subject) &&
          containsSelection(state.category, documentItem.category) &&
          containsSelection(state.subcategory, documentItem.subcategory) &&
          containsSelection(state.microcategory, documentItem.microcategory) &&
          containsSelection(state.nature, documentItem.nature);
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

      const active = ["collection", "type", "subject", "category", "subcategory", "microcategory", "nature"]
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
      ["collection", "type", "subject", "category", "subcategory", "microcategory", "nature"].forEach(function (group) {
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
