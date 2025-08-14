/*
 * Exemplos Modernos de JavaScript (ES6+)
 *
 * Este arquivo demonstra recursos modernos do JavaScript, como template literals, destructuring, spread e rest.
 * Esses recursos tornam o código mais legível, conciso e fácil de manter.
 * Veja abaixo exemplos práticos de cada funcionalidade.
 */

// Exemplo 1: Template Literals
// Permitem interpolar variáveis e expressões dentro de strings usando crases (`), tornando o texto mais dinâmico e legível.
const nome = "Maria";
const idade = 22;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
// Saída: Olá, meu nome é Maria e tenho 22 anos.

// Exemplo 2: Destructuring em Objetos
// Facilita a extração de valores de objetos em variáveis distintas.
const pessoa = { nome: "João", idade: 30, cidade: "Cuiabá" };
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(`Nome: ${nomePessoa}, Idade: ${idadePessoa}`);
// Saída: Nome: João, Idade: 30

// Exemplo 3: Destructuring em Arrays
// Permite extrair valores de arrays em variáveis separadas.
const numeros = [1, 2, 3];
const [primeiro, segundo] = numeros;
console.log(`Primeiro: ${primeiro}, Segundo: ${segundo}`);
// Saída: Primeiro: 1, Segundo: 2

// Exemplo 4: Spread em Arrays
// O operador spread (...) expande elementos de arrays em outros arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combinado = [...arr1, ...arr2];
console.log(combinado);
// Saída: [1, 2, 3, 4, 5]

// Exemplo 5: Spread em Objetos
// O spread também pode ser usado para combinar objetos.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const objCombinado = { ...obj1, ...obj2 };
console.log(objCombinado);
// Saída: { a: 1, b: 2, c: 3 }

// Exemplo 6: Rest em Funções
// O operador rest (...) agrupa múltiplos argumentos em um array.
function soma(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
console.log(soma(1, 2, 3, 4));
// Saída: 10

// Exemplo 7: Rest em Destructuring de Arrays
// O rest pode ser usado para pegar o "restante" dos elementos de um array.
const [primeiroNum, ...resto] = [10, 20, 30, 40];
console.log(primeiroNum); // Saída: 10
console.log(resto);       // Saída: [20, 30, 40]

// Exemplo 8: Rest em Destructuring de Objetos
// O rest pode ser usado para coletar as propriedades restantes de um objeto.
const usuario = { id: 1, nome: "Ana", idade: 28, cidade: "Sinop" };
const { nome: nomeUsuario, ...dadosRestantes } = usuario;
console.log(nomeUsuario);     // Saída: Ana
console.log(dadosRestantes);  // Saída: { id: 1, idade: 28, cidade: "Sinop" }