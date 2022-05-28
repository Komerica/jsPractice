// Object literal { key: value }
// new Object()     -> object클래스를 이용해서 객체 생성
// Object.create();    -> object 클래스 안에 있는 create라는 함수를 이용해서 객체 생성
// key: 문자, 숫자, 문자열, 심볼
// value: 원시값, 객체(함수)
let apple = {
  name: 'apple',
  'hello-bye': '👋',
  0: 1,
  ['hello-bye1']: '👋',
};

//속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['name']); // 대괄호 표기법 bracket notation
console.log(apple['hello-bye']);
console.log(apple[0]);
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation(특수문자[-]쓴 경우 대괄호 표기법으로 접근!)

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

delete apple.emoji;
console.log(apple);

const obj = {
  name: 'Jepil',
  age: 20,
};
//***************************************************/
//*정적인 접근: 코딩하는 시점에, 정적으로 접근이 확정됨 */
//***************************************************/
obj.name;
obj.age;

//*************************************************************/
//*동적인 접근: 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!*/
//*************************************************************/
//Ex1) name 출력
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));
//Ex2) key 추가
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);
//Ex3) key 삭제
function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj);

//************************/
//* object(객체) 축약버전 */
//************************/
const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
console.log(makeObj('jepil', 20));
