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

// Chamadas de função com Optional Chaining (seguro se a função não existir)

// Acesso a elementos de array com Optional Chaining


// Nullish coalescing
// usa o valor à direita apenas se o da esquerda for null ou undefined

// Diferença importante entre ?? e ||

// Usando Optional Chaining junto com Nullish Coalescing

// Exemplo real: obter um telefone encadeado ou texto padrão

// Operadores de atribuição com nullish (??=)


// Resumo rápido (em comentários):
// - Optional chaining (?.) evita TypeError ao acessar propriedades/metodos em valores possivelmente null/undefined.
// - Nullish coalescing (??) escolhe um default apenas quando o valor é null ou undefined (não para 0, '', false).
// - Quando misturar ?? com || ou &&, coloque parênteses para evitar erro de sintaxe.