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
 */

// Exemplo: remover elementos (mutação)
const exemplo1 = [1, 2, 3, 4, 5];
const removidos1 = exemplo1.splice(2, 2); // a partir do índice 2 remove 2 itens (3 e 4)
console.log('splice - exemplo1 (após remoção):', exemplo1); // [1,2,5]
console.log('splice - removidos1:', removidos1); // [3,4]

// Exemplo: inserir sem remover
const exemplo2 = ['a', 'b', 'c'];
exemplo2.splice(1, 0, 'x', 'y'); // no índice 1, remove 0 e insere 'x','y'
console.log('splice - exemplo2 (após inserção):', exemplo2); // ['a','x','y','b','c']

// Exemplo: substituir (remover e inserir)
const exemplo3 = [10, 20, 30];
const removidos3 = exemplo3.splice(1, 1, 99); // substitui o 20 por 99
console.log('splice - exemplo3 (após substituição):', exemplo3); // [10,99,30]
console.log('splice - removidos3:', removidos3); // [20]

// Observação: splice modifica o array original. Se precisar preservar o original,
// clone-o antes (ex.: const copia = arr.slice() ou [...arr]).

// Conjunto de dados usado nos exemplos
const numeros = [1, 2, 3, 4, 5, 6];
const pessoas = [
    { nome: 'Ana', idade: 23 },
    { nome: 'Bruno', idade: 17 },
    { nome: 'Carla', idade: 30 },
    { nome: 'Diego', idade: 16 },
];

// --- MAP: transforma cada item e retorna um novo array
// Ex: dobrar valores
const dobrados = numeros.map(n => n * 2);
console.log('map - dobrados:', dobrados); // [2,4,6,8,10,12]

// Ex: extrair apenas os nomes
const nomes = pessoas.map(p => p.nome);
console.log('map - nomes:', nomes); // ['Ana','Bruno','Carla','Diego']

// --- FILTER: filtra itens que passaram no teste (retornam true)
const pares = numeros.filter(n => n % 2 === 0);
console.log('filter - pares:', pares); // [2,4,6]

// Ex: somente maiores de idade (>=18)
const adultos = pessoas.filter(p => p.idade >= 18);
console.log('filter - adultos:', adultos); // [{Ana...}, {Carla...}]

// --- REDUCE: reduz o array a um único valor acumulado
// Ex: soma de todos os números
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log('reduce - soma:', soma); // 21

// Ex: transformar array de pessoas em um objeto indexado por nome
const porNome = pessoas.reduce((acc, p) => {
    acc[p.nome] = p.idade;
    return acc;
}, {});
console.log('reduce - porNome:', porNome); // { Ana: 23, Bruno: 17, Carla: 30, Diego: 16 }

// --- FIND: retorna o primeiro elemento que satisfaz a condição (ou undefined)
const primeiroMenor = pessoas.find(p => p.idade < 18);
console.log('find - primeiro menor de idade:', primeiroMenor); // { nome: 'Bruno', idade: 17 }

// --- SOME: verifica se existe pelo menos um item que satisfaz a condição
const existeMenor = pessoas.some(p => p.idade < 18);
console.log('some - existe menor de idade?:', existeMenor); // true

// --- EVERY: verifica se todos os itens satisfazem a condição
const todosAdultos = pessoas.every(p => p.idade >= 18);
console.log('every - todos adultos?:', todosAdultos); // false

// --- EXEMPLOS DE ENCADEAMENTO (chain): map -> filter -> reduce
// Ex: somar idades de pessoas maiores de 18 anos
const somaIdadesAdultos = pessoas
    .filter(p => p.idade >= 18)   // filtra adultos
    .map(p => p.idade)            // pega só a idade
    .reduce((acc, idade) => acc + idade, 0); // soma
console.log('chain - soma idades adultos:', somaIdadesAdultos); // 53 (23 + 30)
