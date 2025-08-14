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
 *
 */

// --- SPLICE: altera o array original (mutação)

// Ex: remover elementos (mutação)

// Ex: inserir sem remover

// Ex: substituir (remover e inserir)

// Conjunto de dados usado nos exemplos: números e pessoas

// --- MAP: transforma cada item e retorna um novo array

// Ex: dobrar valores

// Ex: extrair apenas os nomes

// --- FILTER: filtra itens que passaram no teste (retornam true)

// Ex: somente maiores de idade (>=18)


// --- REDUCE: reduz o array a um único valor acumulado

// Ex: soma de todos os números

// Ex: transformar array de pessoas em um objeto indexado por nome

// --- FIND: retorna o primeiro elemento que satisfaz a condição (ou undefined)

// --- SOME: verifica se existe pelo menos um item que satisfaz a condição

// --- EVERY: verifica se todos os itens satisfazem a condição

// --- EXEMPLOS DE ENCADEAMENTO (chain): map -> filter -> reduce
// Ex: somar idades de pessoas maiores de 18 anos
