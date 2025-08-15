/**
 * Exemplo 3: Optional Chaining e Nullish Coalescing
 * 
 * Conteúdo:
 * - Exemplo de Optional Chaining
 * - Chamada de função com Optional Chaining
 * - Acesso a elementos de array com Optional Chaining
 * - Nullish Coalescing
 * - Diferenciação entre Nullish Coalescing e Operador Lógico
 * - Uso combinado de Optional Chaining e Nullish Coalescing
 * - Exemplos práticos
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
    //getPhone: () => '9999-0000' // tente comentar/descomentar para testar
};

console.log('user?.name =>', user?.name);            // 'Ana'
console.log('user?.profile?.age =>', user?.profile?.age); // undefined (sem erro)
console.log('user?.address?.city =>', user?.address?.city); // 'Cuiabá'
console.log('user?.address?.country =>', user?.address?.country); // undefined
console.log('user?.address?.zip =>', user?.address?.zip);

// Chamadas de função com Optional Chaining (seguro se a função não existir)
console.log('user?.getPhone?.() =>', user?.getPhone?.());

// Acesso a elementos de array com Optional Chaining
const arr = [{ id: 1 }, { id: 2 }];

console.log('arr?.[0]?.id =>', arr?.[0]?.id); // 1
console.log('arr?.[1]?.id =>', arr?.[1]?.id); // 2
console.log('arr?.[2]?.id =>', arr?.[2]?.id); // undefined

// Nullish coalescing
// usa o valor à direita apenas se o da esquerda for null ou undefined
const a = user.nome ?? 'valor padrão';
console.log(a)

// Diferença importante entre ?? e ||
console.log('0 || "fallback" =>', 0 || 'fallback'); // 'fallback' (0 é falsy)
console.log('0 ?? "fallback" =>', 0 ?? 'fallback'); // 'fallback' (0 é falsy)

// Usando Optional Chaining junto com Nullish Coalescing
const telefone = user.getPhone?.() ?? 'sem telefone';
console.log(telefone);

// Exemplo real: obter um telefone encadeado ou texto padrão

// Operadores de atribuição com nullish (??=)
let count = 10;
count ??= 0;
console.log(count); // 0

// Resumo rápido (em comentários):
// - Optional chaining (?.) evita TypeError ao acessar propriedades/metodos em valores possivelmente null/undefined.
// - Nullish coalescing (??) escolhe um default apenas quando o valor é null ou undefined (não para 0, '', false).
// - Quando misturar ?? com || ou &&, coloque parênteses para evitar erro de sintaxe.