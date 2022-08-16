function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
//👆위에 코드 밑에👇 설명해놓음!!

//👇👇👇👇👇👇👇👇👇👇👇👇👇
//************************/
//***** Promise 설명 *****/
//************************/
//Promise: 콜백을 대체할 수 있는 조금 더 깔끔하게 작성할 수 있는 Promise!
//         무겁고 오래걸리는 일이 있다면, 코드 내부에서 조금 더 비동기적으로 처리할 수 있게 도와줌!
// function runInDelay(callback, seconds) {
//   if (!callback) {
//     throw new Error('callback함수를 전달 해야 함');
//   }
//   if (!seconds || seconds < 0) {
//     throw new Error('seconds는 0보다 커야 함');
//   }
//   setTimeout(callback, seconds * 1000);
// }
// try {
//   runInDelay(() => {
//     console.log('타이머 완료!');
//   }, 2);
// } catch (error) { }
//👆위에 있는 코드(line4-16)를 Promise를 사용해서 아래👇처럼 바꿔준다!
function runInDelay(/* callback, */ seconds) {
  //   if (!callback) {
  //     throw new Error('callback함수를 전달 해야 함');
  //   }
  //   if (!seconds || seconds < 0) {
  //     throw new Error('seconds는 0보다 커야 함');
  //   }
  //   setTimeout(callback, seconds * 1000);
  //runInDelay()함수를 호출하면 즉각적으로 Promise(약속)를 return하는데, ..
  //..여기 Promise(약속)이라는 객체가 있는데, 이걸 갖고 있으면 내가 어느 시점에 몇초가 지나서 timeout이 완료가 되면, ..
  //..성공적으로 끝났는지 실패했는지 이 promise객체를 통해서 너한테 알려줄게..
  //..그러니 내가 전달해주는 Promise객체를 잘 가지고 있어! 라고 Promise를 return해주어야 한다!..
  //👉이렇게 되면 사용하는 입장에서 아래👇와 같이 try catch로 잡지 않아도 됨!
  //*resolve: then호출할때사용 / *reject: 실패한걸 알려줌!
  //👇바로 아래 Promise안의 콜백함수 안에서 비동기적인 일을 수행하면 됨!
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음!'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}
//runInDelay를 호출하면서 2초뒤에 timeout이 완료가 되면, Promise가 끝이 나면 ..
runInDelay(2)
  //..그러면, 여기서👇 내가 필요한 일을 수행(then/catch는 둘중에 하나만 호출됨!)..
  .then(() => console.log('타이머 완료!')) //runInDelay가 성공적으로 완료됐으니 타이머가 완료되었다고 출력함
  //만약 에러가 발생했다면 아래👇처럼 catch를 이용해서 에러를 처리한다!
  //.catch((error) => console.error(error))
  // 👆 전달되는인자(error)와 호출할때 전달하는 인자(error)가 같으니까 아래👇와 같이 생략이 가능!
  .catch(console.error)
  //그리고 위 과정이 다끝나고 성공유무에 관계없이 최종적으로 뭔가를 해야하면 finally를 씀!
  .finally(() => console.log('끝났다!'));

//***********************************************/
//📍정리하자면,
//Promise를 이용해서 runInDelay가
//성공적(fulfill)으로 완료되면 then이 호출,
//실패하면 catch를 통해서 error를 잡고,
//finally는 성공하든 실패하든 상관없이 무조건 호출!
//***********************************************/
