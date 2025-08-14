/**
 * Exemplo 5: Atualizações Imutáveis em Objetos e Arrays (JavaScript)
 *
 * Conceito principal:
 * - "Imutável" aqui significa: não modificar o objeto/array original;
 * - Em vez disso, criar e retornar uma nova versão com as alterações.
 *
 * 
 * Técnicas usadas:
 * - Spread (...) para objetos e arrays
 * - Object.assign para objetos (alternativa ao spread)
 * - Array.prototype.map / filter / concat / slice para arrays
 * - Cuidado com estruturas aninhadas (copiar cada nível necessário)
 */

/* ---------- 1) Objetos simples ---------- */
const originalUser = { id: 1, name: "Ana", age: 30 };

// Atualizar uma propriedade (immutável) - usando spread

// Mesma atualização usando Object.assign


/* ---------- 2) Objetos aninhados (níveis) ---------- */

// Atualizar campo aninhado (copiar cada nível necessário)


/* ---------- 3) Arrays - adicionar, remover, atualizar ---------- */

// Adicionar (immutável) - concat / spread

// Remover (immutável) - filter

// Atualizar item por índice (immutável) - map ou slice + concat

