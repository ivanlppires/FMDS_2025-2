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
const userUpdated = { ...originalUser, age: 31 };

// Mesma atualização usando Object.assign
const userUpdated2 = Object.assign({}, originalUser, { age: 31 });

console.log("originalUser:", originalUser);
console.log("userUpdated:", userUpdated);
console.log("userUpdated2:", userUpdated2);

/* Resultado esperado:
 originalUser: { id: 1, name: 'Ana', age: 30 }
 userUpdated:  { id: 1, name: 'Ana', age: 31 }
*/

/* ---------- 2) Objetos aninhados (níveis) ---------- */
const originalProfile = {
    id: 42,
    name: "Bruno",
    address: { city: "Recife", zipcode: "50000-000" },
    preferences: { theme: "light" },
};

// Atualizar campo aninhado (copiar cada nível necessário)
const newProfile = {
    ...originalProfile,
    address: { ...originalProfile.address, city: "Olinda" },
};

console.log(originalProfile, newProfile.preferences); 


/* ---------- 3) Arrays - adicionar, remover, atualizar ---------- */
const numbers = [1, 2, 3];
console.log("numbers:", numbers);

// Adicionar (immutável) - concat / spread
const numbersPlus = [...numbers, 4]; // [1,2,3,4]
console.log("numbersPlus:", numbersPlus);

// Remover (immutável) - filter
const without2 = numbers.filter(n => n !== 2); // [1,3]
console.log("without2:", without2);

// Atualizar item por índice (immutável) - map ou slice + concat
const replacedIndex1 = numbers.map((n, i) => (i === 1 ? 20 : n)); // [1,20,3]
console.log("replacedIndex1:", replacedIndex1);

// ou
const replacedIndex1b = [...numbers.slice(0, 1), 20, ...numbers.slice(2)];
console.log("replacedIndex1b:", replacedIndex1b);


/* ---------- 5) Observações e boas práticas ---------- */
/*
 - Nunca modifique diretamente o parâmetro recebido se quiser manter imutabilidade.
 - Use spread / map / filter / concat / slice para criar novas estruturas.
 - Para objetos/arrays profundamente aninhados, considere:
        - Escrever pequenos helpers que copiam apenas os níveis necessários;
        - Ou usar uma biblioteca (por ex.: immer) que permite sintaxe mutável local com produção de estado imutável.
 - Evite JSON.parse(JSON.stringify(obj)) em produção para copiar: perde funções, datas, e é lento.
*/

/* ---------- Exercício rápido (para praticar) ----------
 Tente atualizar o campo 'zipcode' de originalProfile sem mutar originalProfile.
----------------------------------------------------- */