/*
    main.tmp.js
    Exemplos de Optional Chaining (?.) e Nullish Coalescing (??)
    Objetivo: demonstrar uso prático e diferenças com operadores tradicionais.
    
*/

// Optional Chaining
// operador ?. permite acessar propriedades de objetos que podem ser null ou undefined sem lançar erros.

// Exemplo básico de Optional Chaining
const user = {
    name: 'Ana',
    address: {
        city: 'Cuiabá',
        zip: null // explicitamente null
    },
    // getPhone: () => '9999-0000' // tente comentar/descomentar para testar
};

console.log('user?.name =>', user?.name);            // 'Ana'
console.log('user?.profile?.age =>', user?.profile?.age); // undefined (sem erro)
console.log('user?.address?.city =>', user?.address?.city); // 'Cuiabá'
console.log('user?.address?.country =>', user?.address?.country); // undefined

// Chamadas de função com Optional Chaining (seguro se a função não existir)
console.log('user.getPhone?.() =>', user.getPhone?.()); // undefined (não lança se getPhone não existe)

// Acesso a elementos de array com Optional Chaining
const arr = [{ id: 1 }, { id: 2 }];
console.log('arr?.[1]?.id =>', arr?.[1]?.id); // 2
console.log('arr?.[5]?.id =>', arr?.[5]?.id); // undefined

// Nullish coalescing
// usa o valor à direita apenas se o da esquerda for null ou undefined

const a = undefined ?? 'valor padrão';
const b = null ?? 'valor padrão';
const c = 0 ?? 42;      // 0 NÃO é nullish, então c === 0
const d = '' ?? 'x';    // string vazia NÃO é nullish, então d === ''

console.log('undefined ?? =>', a);
console.log('null ?? =>', b);
console.log('0 ?? =>', c);
console.log("'' ?? =>", d);

// Diferença importante entre ?? e ||
console.log('0 || "fallback" =>', 0 || 'fallback'); // 'fallback' (0 é falsy)
console.log('0 ?? "fallback" =>', 0 ?? 'fallback'); // 0 (0 não é nullish)

// Usando Optional Chaining junto com Nullish Coalescing
const cep = user.address?.zip ?? 'sem CEP cadastrado';
console.log('CEP =>', cep); // 'sem CEP cadastrado' porque zip === null

// Exemplo real: obter um telefone encadeado ou texto padrão
const phone = user.profile?.contact?.phone ?? 'telefone não disponível';
console.log('phone =>', phone);

// Operadores de atribuição com nullish (??=)
let count = undefined;
count ??= 10; // atribui 10 apenas se count for null ou undefined
console.log('count após ??= (antes undefined) =>', count); // 10

let zeros = 0;
zeros ??= 5; // NÃO atribui porque 0 não é nullish
console.log('zeros após ??= (antes 0) =>', zeros); // 0

// Observação sobre precedência: não misture ?? com || ou && sem parênteses
// Exemplo que daria erro de sintaxe (descomentário apenas para estudo):
// const mixed = null || 'fallback' ?? 'outra'; // SyntaxError: Cannot mix '??' with '||'.
//
// Forma correta: use parênteses para deixar a ordem explícita
const mixedCorrect = (null || 'fallback') ?? 'outra';
console.log('mixedCorrect =>', mixedCorrect); // 'fallback'

// Resumo rápido (em comentários):
// - Optional chaining (?.) evita TypeError ao acessar propriedades/metodos em valores possivelmente null/undefined.
// - Nullish coalescing (??) escolhe um default apenas quando o valor é null ou undefined (não para 0, '', false).
// - Quando misturar ?? com || ou &&, coloque parênteses para evitar erro de sintaxe.