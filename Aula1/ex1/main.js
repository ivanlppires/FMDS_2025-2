// ### Declaração de Variávei

// Usando let (pode ser alterada depois)
let nome = "Maria";
nome = "João"; // valor alterado

// Usando const (não pode ser alterada)
const idade = 25;
// idade = 30; // Isto causaria um erro

// Usando var (forma antiga, evite usar)
var cidade = "Cuiabá";

console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);

// ### Arrow Functions

// Função tradicional
function soma(a, b) {
    return a + b;
}

// Arrow function equivalente
const somaArrow = (a, b) => a + b;

// Arrow function com apenas um parâmetro
const dobro = x => x * 2;

// Arrow function sem parâmetros
const saudacao = () => console.log("Olá, mundo!");

// Exemplos de uso
console.log(soma(2, 3));        // 5
console.log(somaArrow(4, 7));   // 11
console.log(dobro(10));         // 20
saudacao();                     // Olá, mundo!

