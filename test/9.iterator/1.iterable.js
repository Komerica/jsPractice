// Iterable 하다는건! 순회가 가능하다는 것!
// [Symbol.iterator](): Iterator;
// 👆위와 같이 1️⃣심볼정의를 가진 객체나,
// 2️⃣특정한 함수(array.entries()/array.keys()/array.values())가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for-of, spread
const array = [1, 2, 3];
for (const item of array.values()) {
  console.log(item);
}
Array; //<<를 클릭해서 interface 부분을 보면, ..
//.. [Symbol.iterator](): IterableIterator<T>; ..
//.. -> [Symbol.iterator]()라는 함수를 호출하면, IterableIterator를 호출하는 것을 확인할 수 있다!
//.. So, Array는 Iteration Protocol을 따라간다!
//... So, for-of 연산자를 사용했을때, Array 안에 있는 Symbol Iterator함수를 호출해서, ...
//... 거기서 반환된 Iterator를 가지고 하나하나씩 next를 호출하면서 값을 순회하는 것이다!

//*values: 배열안의 value를 모두 출력!
for (const item of array.values()) {
  //<- values/keys/entries를 다 클릭해보면 전부다 [Symbol.iterable](): IterableIterator<T>
  console.log(item);
}
//*keys: 배열안의 key를 모두 출력!
for (const item of array.keys()) {
  console.log(item);
}
for (const item of array.entries()) {
  console.log(item); //[ 0, 1 ] 0번째 인덱스는 1, [ 1, 2 ] 1번째 인덱스는 2, [ 2, 3 ] 2번째 인덱스는 3
}

//👇아래와 같이 Iteration protocol을 따라 가지 않는 일반 객체는..
const obj = { 0: 1, 1: 2 };
//..for-of 연산자는 사용할 수 없고, 대신 👇아래와 같이 for-in이라는 연산자는 사용가능!
console.log('---------일반객체--------');
for (const item in obj) {
  //*for-in: object안에 있는 key를 출력한다!
  console.log(item); //0, 1
}
const 배열 = [1, 2, 3];
for (const item in 배열) {
  console.log(item); //0,1,2  //배열도 for-in을 써서 순회가 가능하지만 index만 반환해준다!
}
//So, for-in의 문제점을 보완하기 위해서 ECMA2015에 for-of추가!
//-> for-of로 배열은 물론, object까지 쉽게 순회가능!

console.log('--------iterator1--------');
const iterator1 = array.values();
console.log(iterator1.next()); //{ value: 1, done: false }
console.log(iterator1.next()); //{ value: 2, done: false }
console.log(iterator1.next()); //{ value: 3, done: false }
console.log(iterator1.next()); //{ value: undefined, done: true }

console.log('--------iterator2--------');
const iterator2 = array.values();
console.log(iterator2.next()); //{ value: 1, done: false }  // done이 false라는 것은 아직 반복이 안끝났다는 뜻!
for (const item of iterator2) {
  console.log(item); //2, 3
}
console.log(iterator2.next()); //{ value: undefined, done: true }
console.log(iterator2.next().value); //undefined
console.log(iterator2.next().done); //done이 true라는 것은 반복이 끝났다는 것을 나타내줌!

//for-of 라는 연산자는 내부적으로 👇👇아래와 같이 설계가 되어있음(?) -> 결과값 같음! // 1,2,3
//for-of 예시 -> line6-9
console.log('--------iterator3--------');
const iterator3 = array.values();
while (true) {
  const item = iterator3.next();
  if (item.done) break; //if(item.done === true) === if(item.done)  ->  true는 생략가능!
  console.log(item.value); // 1,2,3
}

const arr1 = [1, 2, 23];
for (const item of arr1.entries()) {
  console.log(item);
}
