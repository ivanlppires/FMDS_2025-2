
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

function describe(prefix){ // função descrever
    console.log(prefix, this.name)
    // console.log(prefix, this.name);
}
const person = {
    name: 'Maria'
}
describe.call(person, 'call');
describe.apply(person, ['apply']);
const arr = ['apply'];
describe.call(person, ...arr)
const desc = describe.bind(person, 'bind'); // bind: Maria
console.log('faço outras coisa...')
desc(); // bind: Maria  

/* -----------------------
     3) Arrow functions e `this` léxico
     ----------------------- */

const counter = {
    value: 0,
    // método com função normal: this refere-se a counter quando chamado como counter.increment()
    increment: function () {
        this.value++;
        console.log("increment (normal):", this.value);
    },
    // método com arrow function: NÃO tem seu próprio this, usa o this léxico do escopo onde foi definido
    arrowIncrement: () => {
        // aqui `this` NÃO será o objeto counter (undefined em strict), pois arrow captura this do escopo externo
        try {
            console.log(this)
            this.value++;
            console.log("arrowIncrement:", this.value);
        } catch (e) {
            console.log("arrowIncrement -> erro ao acessar this:", e.message);
        }
    },
};

counter.increment();      // increment (normal): 1
counter.arrowIncrement(); // arrowIncrement -> erro ou comportamento inesperado


/* -----------------------
     4) Classes (sintaxe moderna)
     ----------------------- */

class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    greet() {
        console.log(`Olá, eu sou ${this.name}.`);
    }

    getAge(currentYear = new Date().getFullYear()) {
        return currentYear - this.yearOfBirth;  
    }

    // método estático: não usa `this` de instância, pertence à classe
    static species() {
        return "Homo sapiens";
    }
}

const p = new Person("João", 1990);
p.greet(); // Olá, eu sou João.
console.log("Idade:", p.getAge(2025)); // Idade: 35
console.log("Espécie:", Person.species()); // Espécie: Homo sapiens

// Herança
class Student extends Person {
    constructor(name, yearOfBirth, course) {
        super(name, yearOfBirth); // chama o construtor da superclasse
        this.course = course;
    }

    greet() {
        // sobrescreve método; pode usar super para chamar implementação pai
        super.greet();
        console.log(`Eu estudo ${this.course}.`);
    }
}

const s = new Student("Ana", 2000, "Matemática");
s.greet();
// Olá, eu sou Ana.
// Eu estudo Matemática.