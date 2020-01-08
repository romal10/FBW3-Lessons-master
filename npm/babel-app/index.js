let greeting = () => { return 'hello DCI' }

console.log(greeting());

const obj1 = {a: 10};
const obj2 = {b: 20};
const obj3 = {c: 30};

// ES2018
console.log({...obj1, ...obj2, ...obj3}); 