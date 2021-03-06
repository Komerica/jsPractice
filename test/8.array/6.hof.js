const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²(μ½λ°±ν¨μ)μ ν λ
//Performs the specified action for each element in an array.
fruits.forEach(function (value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
// find: Returns the value of the first element in the array where predicate is true, and undefined
const item1 = { name: 'π₯', price: 2 };
const item2 = { name: 'πͺ', price: 3 };
const item3 = { name: 'π', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === 'πͺ');
console.log(result); //{ name: 'πͺ', price: 3 }

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
// findIndex: Returns the index of the first element in the array where predicate is true, and -1
result = products.findIndex((item) => item.name === 'πͺ');
console.log(result); //1

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
// μ‘°κΈμ΄λΌλ μ‘°κ±΄μ λ§μΌλ©΄ trueλ₯Ό μΆλ ₯!
// some: Determines whether the specified callback function returns true for any element of an array.
result = products.some((item) => item.name === 'πͺ');
console.log(result); //true

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
// every: Determines whether all the members of an array satisfy the specified test.
result = products.every((item) => item.name === 'πͺ');
console.log(result); //false

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
// Returns the elements of an array that meet the condition specified in a callback function.
result = products.filter((item) => item.name === 'πͺ');
console.log(result.length); //[ { name: 'πͺ', price: 3 }, { name: 'πͺ', price: 3 } ]

console.clear();

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ μλ‘μ΄ λ°°μ΄λ‘!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); //μ«μλ₯Ό sort(μ λ ¬)νλ©΄ λ¬Έμλ‘ λ°λμ΄μ μ λ ¬μ΄λΌμ [ 0, 1, 10, 2, 4, 5 ] κ²°κ³Όκ° μ΄μνκ² λμ΄!
console.log(numbers);
//Function used to determine the order of the elements.
//It is expected to return a negative value if the first argument is less than the second argument, ..
//..zero if they're equal, ..
//..and a positive value otherwise.
//...If omitted, the elements are sorted in ascending, ASCII character order.
// a-b < 0 π aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
// a-b > 0 π bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
//π μ«μμ λ ¬ μ λλ‘ νλλ°©λ²!! π
numbers.sort((a, b) => a - b); // [ 0, 1, 2, 4, 5, 10 ]
console.log(numbers);

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘!
//reduce: Calls the specified callback function for all the elements in an array..
//..The return value of the callback function is the accumulated result, ..
//..and is provided as an argument in the next call to the callback function.
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0); //15
//result = [1, 2, 3, 4, 5].reduce((sum, value) => sum + value, 0); // 15 λ‘ μμ κ°μ΄ κ°κ² λμ¨λ€!
console.log(result);
