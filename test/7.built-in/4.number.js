const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);
//Ex)
if (num1 < Number.MAX_VALUE) {
  console.log('안녕');
}
if (Number.isNaN(num1)) {
  console.log('안녕2');
}

// Number라는 Class에서는 static한 properties가 있다!..
// ..즉, 객체를 만들지 않고 Class Level에서 접근이 가능한 여러가지 상수 변수가 있다!
console.log(Number.MAX_VALUE); // 점수에서 사용할 수 있는 가장 큰 숫자가 나옴! e+308
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); // 정수에서 사용할 수 있는 최고의 값 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // 정수에서 사용할 수 있는 최소의 값 (-(2^53 - 1))
console.log(Number.NaN); // 숫자가 아닌것
console.log(Number.NEGATIVE_INFINITY); // 음의 infinity 값
console.log(Number.POSITIVE_INFINITY); // 양의 infinity 값
console.log(Number.prototype); // {}

//************************************************************/
//* Static Methods: 클래스에서 접근이 가능한 클래스 함수가 있음! */
//************************************************************/
console.log('-----------');
console.log(Number.isNaN()); //숫자가 인지아닌지 -> false
console.log(Number.isFinite()); // 유한한지 -> false
console.log(Number.isInteger()); // Integer인지 -> false
console.log(Number.isSafeInteger()); //범위안에 들어있는 safeInteger(안전한Integer)인지 -> false
console.log(Number.parseFloat('3.12')); // Float으로 parsing하는 것 //전역함수(global.js)에서도 쓸수 있었음!
console.log(Number.parseInt()); // Integer로 parsing하는 것 //전역함수(global.js)에서도 쓸수 있었음!

//****************************************************************************************/
//* Instance Methods: 인스턴스 레벨에서 number라는 객체를 만들어서 접근이 가능한 함수가 있음! */
//****************************************************************************************/
// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2  // e+2 = 10^2 // -> 1.02 * 10^2 = 102

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); //'1234'

console.log(num4.toString()); //'1234.12' //Object라면 공통적으로 사용할 수 있는 toString()과 valueOf()
console.log(num4.toLocaleString('ar-EG')); //아라빅언어(Arabic Langauge)

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); //1234.1
console.log(num4.toPrecision(4)); //1234
console.log(num4.toPrecision(2)); //1.2e+3 = 1.2 * 10^3 = 1200 // 전체 자릿수 표기가 안될때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); //EPSILON: 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

// 10진수 -> 2진수로 변환, (+,-)연산을 하고 결과값을 다시 10진수로 반환한다!..
//.. 그래서 정확히 부동소수점까지 계산이 되지 않는다. 그래서 작은 오차를 나타낼 수 있는데,
//-> 이렇게 작은 오차를 나태는 것이 바로 EPSILON이라고 생각하면 됨!
const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON; // Math.abs = 절대값
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
