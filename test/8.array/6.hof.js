const fruits = ['🍌', '🍓', '🍇', '🍓'];

// 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
//Performs the specified action for each element in an array.
fruits.forEach(function (value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
// find: Returns the value of the first element in the array where predicate is true, and undefined
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === '🍪');
console.log(result); //{ name: '🍪', price: 3 }

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
// findIndex: Returns the index of the first element in the array where predicate is true, and -1
result = products.findIndex((item) => item.name === '🍪');
console.log(result); //1

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
// 조금이라도 조건에 맞으면 true를 출력!
// some: Determines whether the specified callback function returns true for any element of an array.
result = products.some((item) => item.name === '🍪');
console.log(result); //true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
// every: Determines whether all the members of an array satisfy the specified test.
result = products.every((item) => item.name === '🍪');
console.log(result); //false

// 조건에 맞는 모든 아이템들을 새로운 배열로!
// Returns the elements of an array that meet the condition specified in a callback function.
result = products.filter((item) => item.name === '🍪');
console.log(result.length); //[ { name: '🍪', price: 3 }, { name: '🍪', price: 3 } ]

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
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

// Flatmap: 중첩된 배열을 쫘악 펴서 새로운 배열로!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); //숫자를 sort(정렬)하면 문자로 바뀌어서 정렬이돼서 [ 0, 1, 10, 2, 4, 5 ] 결과가 이상하게 나옴!
console.log(numbers);
//Function used to determine the order of the elements.
//It is expected to return a negative value if the first argument is less than the second argument, ..
//..zero if they're equal, ..
//..and a positive value otherwise.
//...If omitted, the elements are sorted in ascending, ASCII character order.
// a-b < 0 👉 a가 앞으로 정렬, 오름차순
// a-b > 0 👉 b가 앞으로 정렬, 내림차순
//👇 숫자정렬 제대로 하는방법!! 👇
numbers.sort((a, b) => a - b); // [ 0, 1, 2, 4, 5, 10 ]
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
//reduce: Calls the specified callback function for all the elements in an array..
//..The return value of the callback function is the accumulated result, ..
//..and is provided as an argument in the next call to the callback function.
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0); //15
//result = [1, 2, 3, 4, 5].reduce((sum, value) => sum + value, 0); // 15 로 위와 값이 같게 나온다!
console.log(result);
