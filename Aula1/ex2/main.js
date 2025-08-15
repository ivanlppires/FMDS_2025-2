/**
 * Exemplo 2: Uso de recursos modernos do JavaScript (ES6+).
 *
 * Conteúdo:
 * - Uso de template literals para interpolar variáveis e expressões em strings.
 * - Destructuring de objetos (extração de propriedades em variáveis, com renomeação).
 * - Destructuring de arrays (extração posicional de elementos).
 * - Operador spread em arrays (combinar/expandir arrays).
 * - Operador spread em objetos (combinar objetos).
 * - Operador rest em funções (agrupar múltiplos argumentos em um array).
 * - Operador rest em destructuring de arrays (capturar o restante dos elementos).
 * - Operador rest em destructuring de objetos (capturar as propriedades restantes).
 * - Uso de Array.prototype.reduce para agregar valores (ex.: soma de elementos).
 * - Boas práticas de ES6+ para código mais legível e conciso (comentários e exemplos).
 */

// Exemplo 1: Template Literals
//const nome = "Ivan"
//console.log(`Meu nome é ${nome}.`);

// Exemplo 2: Destructuring em Objetos
const pessoa = {
    nome: "Ivan",
    idade: 30,
    cidade: "Sinop"
};

console.log(`pessoa.nome: ${pessoa.nome}`);

const {nome} = pessoa;
console.log(`Nome: ${nome}`);

const {idade: idadeUsuario} = pessoa;
console.log(`Idade: ${idadeUsuario}`);

// vamos esse vetor nos exemplos
const numeros = [10, 20, 30];

// Exemplo 3: Destructuring em Arrays
const [primeiro, segundo] = numeros;
console.log(`Primeiro: ${primeiro}, Segundo: ${segundo}`);

// Exemplo 4: Spread em Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // ... é o operador spread, neste contexto.
console.log(`Array combinado: ${arr3}`);

// Exemplo 5: Spread em Objetos
const login = {
    nome: 'Ivan',
    email: 'ivanpires@unemat.br'
}
const permissao = {
    admin: true,
    editor: false
};

const user = {
    ...login,
    ...permissao
};
console.log(user);

// Exemplo 6: Rest em Funções
const soma = (...numeros) => numeros.reduce((total, n) => total + n, 0);

console.log(soma(1, 2, 3));

// Exemplo 7: Rest em Destructuring de Arrays

const frutas = ['maçã', 'banana', 'laranja', 'manga'];
const [primeira, segunda, ...resto] = frutas;
console.log(`Frutas: ${primeira}, ${segunda}, ${resto.join(' e ')}`);

// Exemplo 8: Rest em Destructuring de Objetos
const usuario = {
    id: 1,
    nome: 'Ana',
    idade: 28,
    cidade: 'Cuiabá'
};
const {nome: nomeUsuario, ...dadosRestantes} = usuario;
console.log(`Nome: ${nomeUsuario}`);
console.log(`Dados restantes: ${JSON.stringify(dadosRestantes)}`);

