//Symbol은 Object에 주석을 달 수 있게 해주는 것이라고 생각하면 됨!
//Import해온 파일/라이브러리 쓸때 유용!
// -> 그 안에 들어있던 object에 자료를 추가하고 싶을때 씀!
//    Why ? 반복문에 안뜨니까 기존코드 해칠 염려 X
//*Symbol 특징*
//  1.설명이 같다고 같은 Symbol이 아님
//     Ex) var a = Symbol('설명1');  VS  var b = Symbol('설명1');   a === b / a == b  ->  False
//      -> Why? Symbol을 만들면 각자만의 Symbol(상징,특징), 즉, Identity가 생기는 것이라서,
//         Symbol안에 들어가는 value가 같다고 해서 a === b True가 나오지 않음!
//  2.Symbol.for()로 만드는 전역 심볼(Global Symbol)
//     Ex) var a = Symbol.for('설명1);  VS  var b = Symbol.for('설명1');   a === b / a == b  ->  True
//      -> var a = Symbol.for('설명1); & var b = Symbol.for('설명1');  ->  var b = a  와 같은것!
//  3.기본 내장 Symbol들
//     Ex) var 어레이 = [2,3,4];  어레이[Symbol.iterator];
//      -> [Symbol.iterator]는 JS가 Array Object를 만들때 미리 몰래 집어넣은 기본 Symbol이다!
//         Symbol이기때문에 '어레이'를 반복문을 돌려도..
//         ..Symbol안에 들어있는 내용( f values(){[native code]} )이 뜨지 않는것!
const weight = Symbol('Secret');
const height = Symbol('키 비밀');

const person = {
  name: 'Jepil',
  weight: 100,
  [height]: 150, //위에서 Symbol을 정의해준 상태에서 이런식으로 직관적으로 객체에 바로 넣어도 됨!
};

//Enumerable: 셀수 있는지 여부
//Object에 Symbol로 저장하면 Enumerable(열거할수있는)하지 않기 때문에 for문(반복문)에서 출력이 안된다!
person[weight] = 200;

for (const item in person) {
  console.log(person[item]); //Jepil, 100   -> 200은 출력이 안됨! person[weight]이 Enumerable하지 않아서!
}
console.log(person);
console.log(person[height]); //150
