/**
 * hehe
 * hihi
 */

//If Statement
let num = 234;
//Method 1
num % 2 === 0 ? console.log('π') : console.log('π');
//Method 2
let emoji = num % 2 === 0 ? 'π' : 'π';
console.log(emoji);
//Method 3
if (num % 2 === 0) {
  console.log('π');
} else {
  console.log('π');
}

//Switch Statement
let condition = 'nice';
let text;
switch (condition) {
  case 'good':
  case 'nice':
    text = 'μ’μ!';
    break;
  case 'bad':
    text = 'λμ¨!';
    break;
  default:
    text = 'ν΄λΉμ¬ν­ μμ!';
    break;
}
console.log(text);

//For Statement
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log(`${i}κ° λλμ΄ 10μ΄ λμλ€!`);
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

//Fucntion Return μ μ΄μ©νμ!
// + Ex) μ‘°κ±΄μ΄ λ§μ§ μλ κ²½μ° ν¨μ λμλΆλΆμμ λ€λ₯Έ λλ¨Έμ§κ²λ€μ΄ μ€νλκΈ° μ  ν¨μλ₯Ό μΌμ°μ΄ μ’λ£ν¨
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(2);
print(-2);

//Arguments
// λ§€κ°λ³μ(parameters)μ μ λ³΄λ ν¨μ λ΄λΆμμ μ κ·Όμ΄ κ°λ₯ν arguments κ°μ²΄μ μ μ₯!
// λ§€κ°λ³μ κΈ°λ³Έκ°(Default Parameters) Ex) function add(a = 1, b = 2){}
function add(a = 1, b = 2) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments);
  return a + b;
}
add(2, 3);
console.log(add());

// Rest λ§€κ°λ³μ Rest Parameters
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

function sum2(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

// ν¨μ μ μΈλ¬Έ ->   function name(){}
// ν¨μ ννμ ->   const name = function (){}
let add2 = function (a, b) {
  return a + b;
};
console.log(add2(1, 2));

// νμ΄ν ν¨μ ->   const name = () => {}
add3 = (a, b) => {
  return a + b;
};
add3 = (a, b) => a + b; //νΉλ³ν μΌμ νμ§ μκ³  κ°λ§ returnνλ ν¨μλ©΄ return + {}μλ΅κ°λ₯

// μμ±μ ν¨μ const object = new Function(); // λ€μ κ°μ²΄ νΈμμ λ€λ£Έ

//********************************************************************************
// IIFE(Immediately-Invoked Function Expressions; μ¦κ°μ μΌλ‘ νΈμΆλλ ν¨μ ννμ)
//  -> ν¨μλ₯Ό μ μνμλ§μ λ°λ‘ νΈμΆ!(Front-endμμ λ§μ΄ μ°μ§μμ!)
(function run() {
  console.log('β€');
})();

//********************************
//** Callback Function(μ½λ°±ν¨μ) **
//********************************
const add4 = (a, b) => a + b;
const multiply = (a, b) => a * b;
// action: ν¨μλ₯Ό μ λ¬ν  λΉμμ λ°λ‘ νΈμΆνλκ²μ΄ μλλΌ, ν¨μμ referenceλ§ μΈλΆλ‘λΆν° μ λ¬ λ°μμ..
// ..κ·Έ actionμ λμ€μ λ΄κ° ν¨μ μμμ νΈμΆνλ€! So, μ΄κ²μ Callback ν¨μλΌκ³  λΆλ₯Έλ€!
//-> μλμ μ λ¬λ actionμ μ½λ°±ν¨μ!
//-> μ λ¬λ  λΉμμ ν¨μλ₯Ό λ°λ‘ νΈμΆν΄μ λ°νλ κ°μ μ λ¬νλ κ²μ΄ μλλΌ
//-> ν¨μλ₯Ό κ°λ¦¬ν€κ³  μλ ν¨μμ λ νΌλ°μ€(μ°Έμ‘°κ°)κ° μ λ¬λλ€.
//-> κ·Έλμ ν¨μλ κ³ μ°¨ν¨μμμμ νμν μκ°μ νΈμΆμ΄ λμ€μ λ¨!
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
//μ΄λ κ² add4λ₯Ό μ λ¬νλ©΄ add4λ₯Ό μμ§ νΈμΆνμ§ μμκ²! add4λΌλ μ΄λ¦λ§ μ λ¬νκ²μ΄λ..
//..add4μ μ£Όμκ°(μ°Έμ‘°κ°)λ§ μ λ¬ν΄μ£Όλκ²!
calculator(1, 2, add4);
//console.log(result);

//********************
//7.9 ν¨μλ§λ€κΈ° ν΄μ¦
// μ£Όμ΄μ§ μ«μ λ§νΌ 0λΆν° μννλ ν¨μ
// μννλ©΄μ μ£Όμ΄μ§ νΉμ ν μΌμ μνν΄μΌν¨
// 5, μννλ μ«μλ₯Ό λ€ μΆλ ₯νκ³  μΆμ
// 5, μννλ μ«μμ λλ°°κ°μ λ€ μΆλ ₯νκ³  μΆμ
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
  console.log('1μ΄ λ€ μ€ν!');
}, 1000);

//8.immutability
const jepil = { name: 'jepil' };

function changeName(obj) {
  //μ΄λ¦λΆν° λ³κ²½νλ λλμ μ£Όλλ‘ λ§λ€μ΄μΌν¨!
  return { ...obj, name: 'Bob' }; //λ°νν λλ μλ‘μ΄ μ€λΈμ νΈ λ§λ€κΈ°
}
changeName(jepil);
