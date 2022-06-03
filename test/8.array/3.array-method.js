// 배열의 함수들
// *1.배열 자체를 변경하는지(Update), 2.새로운 배열을 반환하는지 중점을 맞춰서 보자!!
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아에팀이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
//Appends new elements to the end of an array, and returns the new length of the array.
console.log('Push');
console.log(fruits.push('🍑')); //new length of the array를 return // 배열 자체를 수정(업데이트)
console.log(fruits);

// 추가 - 제일 앞
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log('Unshift');
length = fruits.unshift('🍓'); //new length of the array를 return // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
//Removes the last element from an array and returns it
console.log('Pop');
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
//Removes the first element from an array and returns it.
console.log('Shift');
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log('Splice');
const deleted = fruits.splice(1, 1);
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);
fruits.splice(1, 1, '🍎', '🍓');
console.log(fruits); // 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듬
//기존의 배열은 그대로 두고 잘라서 쓰고 싶을때
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3));
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);
