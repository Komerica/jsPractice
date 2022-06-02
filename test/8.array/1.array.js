//*******************/
//** 배열 생성 방법 **/
//*******************/
//1. Class 생성자
let array = new Array(3);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

//2. Static 함수
array = Array.of(1, 2, 3, 4, 5);
console.log(array);

//new Array() / Array.of() 차이점!
array = new Array(1); // [ <1 empty item> ]
console.log(array);
array = Array.of(1); // [ 1 ]
console.log(array);

//3. Array Literal
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

//4. Array from
array = Array.from(anotherArray); //기존에 있던 anotherArray를 그대로 복사해서 array에 대입하여 새로운 Array 만들기
console.log(array);
array = Array.from('text'); //[ 't', 'e', 'x', 't' ]
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고, 오브젝트와 유사함!(Object와 같다고 봐도 무방)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
