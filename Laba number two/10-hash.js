'use strict'

const array1 = [1, 2, 3, 4];
const array2 = [0, 10, -2];
const array3 = [5, 11, -5]

const hash = {};

for (const item of [...array1, ...array2, ...array3]) {
    const type = typeof item;
    hash[type] = (hash[type] || 0) + 1;
}
console.log(hash);