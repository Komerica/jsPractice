const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['π', 'π', 'π', 'π'];
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ π©
fruits[6] = 'π';
console.log(fruits);
fruits[fruits.length] = 'κ³ΌμΌ'; //μ μΌ λ§μ§λ§ indexμ μλ‘ 'κ³ΌμΌ'μ΄ μΆκ°λ¨!

delete fruits[1];
console.log(fruits);
