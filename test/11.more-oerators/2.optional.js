// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 };
const price = item?.price; //item이 있으면(?) price에 접근(.)
//=== 👆 const price = item && item.price  //1.logical.js에서 배웠던 단축평가(short-circuit evaluation)
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  //const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name; //👆를 왼쪽과 같이 간단하게 줄일 수 있음!
  console.log(ownerName);
}
printName(obj);
