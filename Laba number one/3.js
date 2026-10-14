'use strict';

const array1 = [1488, 52, 67, 42, 228, 69, 'автаматом па праграміраванію', null, 'bullshit', 123, 'vibe clauding']; //Дуже постарався з номерами

const hash = {};

for (const item of array1) {
    const type = typeof item;
    hash[type] = (hash[type] ?? 0) + 1;
}

console.log(hash);