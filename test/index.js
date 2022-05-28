/**
 * hehe
 * hihi
 */

//If Statement
let num = 234;
//Method 1
num % 2 === 0 ? console.log('👍') : console.log('👎');
//Method 2
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
//Method 3
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

//Switch Statement
let condition = 'nice';
let text;
switch (condition) {
  case 'good':
  case 'nice':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
  default:
    text = '해당사항 없음!';
    break;
}
console.log(text);

//For Statement
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log(`${i}가 드디어 10이 되었다!`);
    continue;
  }
  console.log(i);
}

//While Statement
let count = 5;
while (count >= 0) {
  console.log(count);
  count--;
}

//Function
let firstName = 'Jepil';
let lastName = 'Lee';
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName(firstName, lastName));

//Fucntion Return 잘 이용하자!
// + Ex) 조건이 맞지 않는 경우 함수 도입부분에서 다른 나머지것들이 실행되기 전 함수를 일찍이 종료함
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(2);
print(-2);

//Arguments
// 매개변수(parameters)의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장!
// 매개변수 기본값(Default Parameters) Ex) function add(a = 1, b = 2){}
function add(a = 1, b = 2) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments);
  return a + b;
}
add(2, 3);
console.log(add());

// Rest 매개변수 Rest Parameters
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

function sum2(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

// 함수 선언문 ->   function name(){}
// 함수 표현식 ->   const name = function (){}
let add2 = function (a, b) {
  return a + b;
};
console.log(add2(1, 2));

// 화살표 함수 ->   const name = () => {}
add3 = (a, b) => {
  return a + b;
};
add3 = (a, b) => a + b; //특별한 일을 하지 않고 값만 return하는 함수면 return + {}생략가능

// 생성자 함수 const object = new Function(); // 뒤에 객체 편에서 다룸

//********************************************************************************
// IIFE(Immediately-Invoked Function Expressions; 즉각적으로 호출되는 함수 표현식)
//  -> 함수를 정의하자마자 바로 호출!(Front-end에서 많이 쓰진않음!)
(function run() {
  console.log('❤');
})();

//********************************
//** Callback Function(콜백함수) **
//********************************
const add4 = (a, b) => a + b;
const multiply = (a, b) => a * b;
// action: 함수를 전달할 당시에 바로 호출하는것이 아니라, 함수의 reference만 외부로부터 전달 받아서..
// ..그 action을 나중에 내가 함수 안에서 호출한다! So, 이것을 Callback 함수라고 부른다!
//-> 아래서 전달된 action은 콜백함수!
//-> 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//-> 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
//-> 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨!
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
//이렇게 add4를 전달하면 add4를 아직 호출하지 않은것! add4라는 이름만 전달한것이니..
//..add4의 주소값(참조값)만 전달해주는것!
calculator(1, 2, add4);
//console.log(result);

//********************
//7.9 함수만들기 퀴즈
// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)
//Answer1)
function double(num) {
  console.log(num * 2);
}
function log(num) {
  console.log(num);
}
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}
iterate(3, double);

//Answer2)
iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

//setTimeout
setTimeout(() => {
  console.log('1초 뒤 실행!');
}, 1000);

//8.immutability
const jepil = { name: 'jepil' };

function changeName(obj) {
  //이름부터 변경하는 느낌을 주도록 만들어야함!
  return { ...obj, name: 'Bob' }; //반환할때는 새로운 오브젝트 만들기
}
changeName(jepil);
