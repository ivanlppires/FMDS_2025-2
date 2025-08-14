/**
 * Aula prática: Assincronismo em JavaScript
 * Conceitos abordados:
 * - Promise (uso básico e encadeamento com .then)
 * - async/await
 * - Execução sequencial vs paralela
 * - fetch (requisições HTTP)
 *
 * Como usar:
 * 1. Crie um arquivo index.html
 * 2. Inclua este script com: <script src="main.js"></script>
 * 3. Abra o index.html no navegador e veja o resultado no console (F12)
 */

// ===== 1) Promise básica =====
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Esperei ${ms}ms`), ms);
  });
}

esperar(1000)
  .then((mensagem) => console.log("then:", mensagem))
  .catch((erro) => console.error("catch:", erro))
  .finally(() => console.log("finally: terminou"));

// ===== 2) Encadeamento de .then =====
esperar(500)
  .then(() => 10)
  .then((valor) => valor * 2)
  .then((resultado) => console.log("Resultado final:", resultado));

// ===== 3) async/await =====
async function exemploAsync() {
  console.log("Iniciando async/await...");
  const a = await esperar(500);
  const b = await esperar(800);
  console.log("Resultados:", a, "e", b);
}
exemploAsync();

// ===== 4) Paralelo vs Sequencial =====
async function comparar() {
  console.log("\n--- Sequencial ---");
  let inicio = Date.now();
  const r1 = await esperar(500);
  const r2 = await esperar(800);
  console.log(r1, r2, "Tempo:", Date.now() - inicio, "ms");

  console.log("\n--- Paralelo ---");
  inicio = Date.now();
  const p1 = esperar(500);
  const p2 = esperar(800);
  const [v1, v2] = await Promise.all([p1, p2]);
  console.log(v1, v2, "Tempo:", Date.now() - inicio, "ms");
}
comparar();

// ===== 5) fetch básico =====
async function buscarDados() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!resposta.ok) throw new Error("Erro na requisição");
    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);
  } catch (erro) {
    console.error("Erro no fetch:", erro.message);
  }
}
buscarDados();
