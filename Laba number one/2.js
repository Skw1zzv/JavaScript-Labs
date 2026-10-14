'use strict';

const inc = (num) => {
    num.n++;
};
const obj = { n: 67 };
inc(obj);

console.log(obj);