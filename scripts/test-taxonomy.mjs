import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { runInThisContext } from "node:vm";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const modules = new Map();

// Transpile the pure data modules with the project's existing TypeScript dependency.
function loadDataModule(file) {
  if (modules.has(file)) return modules.get(file).exports;
  const loaded = { exports: {} };
  modules.set(file, loaded);
  const { outputText } = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: file,
  });
  const execute = runInThisContext(`(function(require, module, exports) {${outputText}\n})`, { filename: file });
  execute((name) => loadDataModule(resolve(dirname(file), `${name}.ts`)), loaded, loaded.exports);
  return loaded.exports;
}

const data = loadDataModule(resolve(root, "src/lib/data.ts"));
const methodology = loadDataModule(resolve(root, "src/lib/metodologia.ts"));
const ids = (docs) => docs.map((doc) => doc.id);

test("collections and 25 information types match the current workbook", () => {
  assert.deepEqual(data.COLECOES, {
    "Jurisprudência": ["Súmulas", "Boletins", "Acórdãos", "Deliberações"],
    "Trabalhos Acadêmicos": ["Teses", "Dissertações", "Monografias", "TCCs", "Memoriais Docentes"],
    "Doutrina e Conteúdo Técnico": ["Livros digitais", "Artigos", "Notas Técnicas", "Relatórios", "Textos de Discussão", "Resumos", "Resumos expandidos", "Enunciados", "Pareceres"],
    "Instrução e Capacitação": ["Manuais", "Guias", "Tutoriais", "Apostilas", "Aulas", "Cursos", "Slides"],
  });
  assert.equal(new Set(Object.values(data.COLECOES).flat()).size, 25);
  assert.equal(data.TIPOS_INFORMACAO_POR_COLECAO, data.COLECOES);
});

test("all 16 subjects match the final workbook", () => {
  assert.deepEqual(data.ASSUNTOS, [
    "Aspectos Jurídicos e Regulatórios", "Governança", "Inovação e Tecnologia",
    "Sustentabilidade e ODS", "Controle, Auditoria e Combate à Corrupção",
    "Gestão de Competências", "Logística e Gestão de Suprimentos",
    "Compras Centralizadas/compartilhadas", "Transparência", "Integridade",
    "Micro e Pequenas Empresas", "Uso de Sistemas", "Sanções Administrativas",
    "Catálogo eletrônico de Padronização",
    "Gestão Estratégica e Desempenho das Contratações", "Logística Pública Internacional",
  ]);
});

test("the classification preserves field order and required dimensions", () => {
  assert.deepEqual(methodology.CLASSIFICATION_FIELDS.map(({ name, required }) => [name, required]), [
    ["Coleção", true], ["Categoria", true], ["Subcategoria", false],
    ["Microcategoria", false], ["Assunto", true], ["Natureza", false],
  ]);
  assert.ok(methodology.CLASSIFICATION_FIELDS.every((field) => field.summary && field.question));
});

test("new subject filters combine without reclassifying existing records", () => {
  const subjects = data.ASSUNTOS.slice(-2);
  const fixtures = subjects.map((assunto, index) => ({ ...data.SAMPLE_DOCS[index], assunto }));
  assert.deepEqual(ids(data.filterDocuments(fixtures, { assunto: subjects })), [1, 2]);
  assert.deepEqual(ids(data.filterDocuments(fixtures, { assunto: subjects[1] })), [2]);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { assunto: subjects })), []);
});

test("auxiliary procedures are separate, with price registration as a subcategory", () => {
  assert.ok(!data.getSubcategoriaOptions("Seleção do Fornecedor").includes("Procedimentos Auxiliares"));
  assert.deepEqual(data.getSubcategoriaOptions("Procedimentos Auxiliares"), [
    "Credenciamento", "Registro de Preços", "Pré-qualificação", "PMI", "Registro Cadastral",
  ]);
  assert.deepEqual(data.getMicrocategoriaOptions("Procedimentos Auxiliares", "Registro de Preços"), []);
  assert.deepEqual(data.getSubcategoriaOptions("invalid"), []);
});

test("all 10 records use valid collection, type, subject and tree values", () => {
  assert.deepEqual(ids(data.SAMPLE_DOCS), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  for (const doc of data.SAMPLE_DOCS) {
    assert.ok(data.COLECOES[doc.colecao].includes(doc.tipoInfo), doc.title);
    assert.ok(data.ASSUNTOS.includes(doc.assunto), doc.title);
    assert.ok(data.CATEGORIAS.includes(doc.categoria), doc.title);
    if (doc.subcategoria) assert.ok(data.getSubcategoriaOptions(doc.categoria).includes(doc.subcategoria), doc.title);
    if (doc.microcategoria) assert.ok(data.getMicrocategoriaOptions(doc.categoria, doc.subcategoria).includes(doc.microcategoria), doc.title);
    assert.equal(doc.natureza, undefined, "Do not infer a contracted object from the topic alone");
  }
  assert.equal(data.SAMPLE_DOCS.find((doc) => doc.id === 5).detalheTipoInfo, "Livro no todo");
  assert.equal(data.SAMPLE_DOCS.find((doc) => doc.id === 10).detalheTipoInfo, "Capítulo de livro");
});

test("illustrative examples share the catalog tree and vocabularies", () => {
  for (const { values } of methodology.CLASSIFICATION_EXAMPLES) {
    const [collection, category, subcategory, microcategory, subject, nature] = values;
    assert.ok(collection in data.COLECOES);
    assert.ok(data.CATEGORIAS.includes(category));
    assert.ok(data.ASSUNTOS.includes(subject));
    if (subcategory !== "Não se aplica") assert.ok(data.getSubcategoriaOptions(category).includes(subcategory), subcategory);
    if (microcategory !== "Não se aplica") assert.ok(data.getMicrocategoriaOptions(category, subcategory).includes(microcategory));
    if (nature !== "Não se aplica") assert.ok(data.NATUREZAS.includes(nature));
  }
});

test("choices use OR within a field and AND between fields", () => {
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { colecao: ["Jurisprudência", "Instrução e Capacitação"] })), [1, 6]);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { colecao: "Doutrina e Conteúdo Técnico", tipoInfo: "Artigos" })), [2, 3, 4, 7, 8, 9]);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { colecao: "Doutrina e Conteúdo Técnico", tipoInfo: "Livros digitais" })), [5, 10]);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { tipoInfo: ["Enunciados", "Acórdãos", "Deliberações"] })), []);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { colecao: "Jurisprudência", tipoInfo: "Artigos" })), []);
  assert.equal(data.filterDocuments(data.SAMPLE_DOCS, { colecao: [], tipoInfo: [], natureza: [] }).length, 10);
});

test("nature combines and clears without inventing missing metadata", () => {
  const fixtures = [{ ...data.SAMPLE_DOCS[0], natureza: "Material" }, { ...data.SAMPLE_DOCS[1], natureza: "Serviços" }, data.SAMPLE_DOCS[2]];
  assert.deepEqual(ids(data.filterDocuments(fixtures, { natureza: ["Material", "Serviços"] })), [1, 2]);
  assert.deepEqual(ids(data.filterDocuments(fixtures, { natureza: ["Material", "Serviços"], colecao: "Jurisprudência" })), [1]);
  assert.deepEqual(ids(data.filterDocuments(fixtures, { natureza: [] })), [1, 2, 3]);
});

test("home counts and metadata search reflect this catalog", () => {
  assert.deepEqual(data.CATEGORIES_HOME.slice(0, 4).map((item) => item.count), [1, 0, 8, 1]);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { query: "Doutrina e Conteúdo Técnico" })), [2, 3, 4, 5, 7, 8, 9, 10]);
  assert.deepEqual(ids(data.filterDocuments(data.SAMPLE_DOCS, { query: "Boletins" })), [1]);
});
