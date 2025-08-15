/**
 * Exemplo 4: Operações com arrays (map/filter/reduce/find/some/every)
 *
 * Conteúdo:
 *
 * - map: mantém o tamanho do array original (um-para-um).
 * - filter: pode reduzir o tamanho (zero ou mais elementos).
 * - reduce: pode produzir valor de qualquer tipo (número, objeto, array ...).
 * - find: retorna o primeiro ou undefined.
 * - some: true se qualquer item satisfaz a condição.
 * - every: true se todos satisfazem a condição.
 * - splice: altera o array original (mutação). Assinatura:
 *     array.splice(indice, quantidadeAExcluir, ...itensParaInserir)
 *   Retorna um array com os itens removidos.
 *
 */

// --- SPLICE: altera o array original (mutação)

// Ex: remover elementos (mutação)
const exemplo1 = [1, 2, 3, 4, 5];
exemplo1.splice(2, 1);
console.log(exemplo1); // [1, 2, 4, 5]

// Ex: inserir sem remover
const exemplo2 = ['a', 'b', 'c'];

exemplo2.splice(1, 0, 'd');
console.log(exemplo2); // ['a', 'd', 'b', 'c']

// Ex: substituir (remover e inserir)
const exemplo3 = [10, 20, 30];
exemplo3.splice(1, 1, 25);
console.log(exemplo3); // [10, 25, 30]

// Conjunto de dados usado nos exemplos: números e pessoas

// --- MAP: transforma cada item e retorna um novo array

// Ex: dobrar valores
const numeros = [1, 2, 3, 4, 5, 6];
const numerosDobrados = numeros.map(n => n * 2);
console.log(numerosDobrados); // [2, 4, 6, 8, 10, 12]

// Ex: extrair apenas os nomes

// --- FILTER: filtra itens que passaram no teste (retornam true)
const pessoas = [
    { nome: 'Ana', idade: 23 },
    { nome: 'Bruno', idade: 17 },
    { nome: 'Carla', idade: 30 },
    { nome: 'Diego', idade: 16 },
    { nome: 'Cláudia', idade: 22 }
];

// Ex: somente maiores de idade (>=18)
const maioresDeIdade = pessoas.filter(p => p.idade >= 18);
console.log(maioresDeIdade);

// --- REDUCE: reduz o array a um único valor acumulado

// Ex: soma de todos os números
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 21

// Ex: transformar array de pessoas em um objeto indexado por nome
const pessoasPorNome = pessoas.reduce((acc, p) => {
    acc[p.nome] = p.idade;
    return acc;
}, {});
console.log(pessoasPorNome);

// --- FIND: retorna o primeiro elemento que satisfaz a condição (ou undefined)
const pessoaComNomeC = pessoas.find(p => p.nome.startsWith('C'));
console.log(pessoaComNomeC);
// comparando FIND com FILTER
const pessoasComNomeC = pessoas.filter(p => p.nome.startsWith('C'));
console.log(pessoasComNomeC);

// --- SOME: verifica se existe pelo menos um item que satisfaz a condição
const existePessoaComNomeC = pessoas.some(p => p.nome.startsWith('C'));
console.log(existePessoaComNomeC);

// --- EVERY: verifica se todos os itens satisfazem a condição
const todasPessoasMaioresDeIdade = pessoas.every(p => p.idade >= 18);
console.log(todasPessoasMaioresDeIdade);

// --- EXEMPLOS DE ENCADEAMENTO (chain): map -> filter -> reduce
// Ex: somar idades de pessoas maiores de 18 anos

const somaIdadesMaioresDeIdade = pessoas
    .filter(p => p.idade >= 18)   // filtra maiores de idade
    .map(p => p.idade)            // pega só a idade
    .reduce((acc, idade) => acc + idade, 0); // soma

console.log(somaIdadesMaioresDeIdade); // 75 (23 + 30 + 22)