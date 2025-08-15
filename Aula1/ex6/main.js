
"use strict";
/**
 * Exemplo 6: this, Funções e Classes (noções rápidas)
 *
 * Conteúdo:
 *
 * - this em funções normais
 * - this em métodos de objetos
 * - Reutilizando funções em diferentes objetos
 * - Call, Apply e Bind
 * - Arrow functions e this léxico
 * - Classes e herança
 *
 */
// Função normal (em strict mode, `this` é undefined quando chamada diretamente)
// function showThisInFunction() {
//     console.log("showThisInFunction -> this:", this);
// }
// showThisInFunction(); // undefined (strict mode)

// Método em objeto: `this` referencia o objeto que recebeu a chamada
const obj = {
    name: "Objeto A",
    getName: function () {
        return this.name;
    },
};
console.log("obj.getName():", obj.getName()); // "Objeto A"

const objComArrowFunction = {
    name: "Objeto B",
    getName: () => this.name
};
console.log("objComArrowFunction.getName():", objComArrowFunction.getName()); // undefined

// Reutilizando função em outro objeto: o valor de `this` depende do call-site
const other = { name: "Objeto C" };
other.getName = obj.getName;
console.log("other.getName():", other.getName()); // "Objeto C"
// Mesmo corpo de função, `this` muda conforme onde é chamada

/*
2) Call, Apply, Bind
- call: chama a função imediatamente, definindo explicitamente o valor de this e passando argumentos individualmente.
- apply: igual ao call, mas os argumentos são passados numa array/iterável.
- bind: não chama a função; retorna uma nova função com this (e opcionalmente alguns argumentos) "fixados" (partial application). Útil para callbacks.     

--> paramos aqui!

*/
