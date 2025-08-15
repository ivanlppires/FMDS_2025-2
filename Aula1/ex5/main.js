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
const updatedUser = { ...originalUser, age: 31 };
console.log(updatedUser); // { id: 1, name: "Ana", age: 31 }

// Mesma atualização usando Object.assign
const updatedUser2 = Object.assign({}, originalUser, { age: 31 });
console.log(updatedUser2); // { id: 1, name: "Ana", age: 31 }

/* ---------- 2) Objetos aninhados (níveis) ---------- */

// Atualizar campo aninhado (copiar cada nível necessário)
const originalNestedUser = {
  id: 1,
  name: "Ana",
  address: {
     city: "Cuiabá",
     state: "MT"
    },
};

const updatedNestedUser = {
  ...originalNestedUser,
  address: {
    ...originalNestedUser.address,
    city: "São Paulo"
  }
};
console.log(updatedNestedUser);

/* ---------- 3) Arrays - adicionar, remover, atualizar ---------- */

// Adicionar (immutável) - concat / spread
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];
console.log(newArray); // [1, 2, 3, 4]

// Remover (immutável) - filter
const filteredArray = originalArray.filter(item => item !== 2);
console.log(filteredArray); // [1, 3]

// Atualizar item por índice (immutável) - map ou slice + concat
const updatedArray = originalArray.map((item, index) =>
  index === 1 ? 20 : item
);
console.log(updatedArray); // [1, 20, 3]

