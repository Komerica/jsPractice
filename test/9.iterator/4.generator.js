// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

//두배씩 숫자를 곱해주는 것을 생성해주는 생성기!(Generator)
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      //return은 바로 리턴하는 반면,
      //yield는 사용자가 원할때까지 기다렸다가 사용자가 그 다음 좀..그 다음 좀..할때까지 하나하나씩 리턴한다
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); //0 false

//다음 next를 호출하기 전에 multiple에 return을 해주면..?
// multiple.return();
//👆 return을 하는 순간 Generator가 끝나게 된다! So, 그 다음에 next를 호출해도 다음 값이 나오지 않고 끝남!
//👇Multiple 안으로 Error를 던져(Throw)주는 것!
multiple.throw('Error!');
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
