

/**
 * Exemplo introdutório de declaração de variáveis e funções em JavaScript.
 *
 * Aborda:
 * - Diferenças entre let, const e var para declaração de variáveis.
 * - Alteração de valores em variáveis declaradas com let.
 * - Imutabilidade de variáveis declaradas com const.
 * - Uso de funções tradicionais e arrow functions.
 * - Exemplos de funções com diferentes quantidades de parâmetros.
 *
 */

/* --- Declaração de Variáveis --- */

// Usando let (pode ser alterada depois)
let nome = "Maria";
nome = "João"; // valor alterado

// Usando const (não pode ser alterada)
const idade = 25;

// idade = 30; // Isto causaria um erro

// Usando var (forma antiga, evite usar)
var cidade = "Cuiabá";

console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);

/* --- Arrow Functions --- */

// Função tradicional
function soma(a, b) {
    return a + b;
}

// Arrow function equivalente
const somaArrow = (a, b) => a + b;

console.log(soma(2, 3)); // 5
console.log(somaArrow(2, 3)); // 5

// Arrow function com apenas um parâmetro
const dobro = x => x * 2;
console.log(dobro(10)); // 20

// Arrow function sem parâmetros
const saudacao = () => console.log("Olá, mundo!");

saudacao(); // Olá, mundo!

