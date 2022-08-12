//Promise: 콜백함수 만드는거랑 비슷함! 콜백함수보다는 약간 기능 많음!
// -> Promise = 성공/실패 판정기계    성공(resolve), 실패(reject)
//*When To Use Promise?
// -> AJAX, setTimeout
//*Why Use Promise?
// -> 1.복잡한(?)콜백함수 안쓰고 Promise를 써서 코드를 좀 더 이쁘게 짜기 위해서!
//    2.성공/실패의 경우에 맞춰 각각 다른 코드 실행가능!

//Ex1)
var 프로미스 = new Promise(function (성공, 실패) {
  var 어려운연산 = 1 + 1;
  //parameter안에 어려운연산을 집어 넣으면 아래 then에서 그 연산의 결과를 쓸 수 있음
  성공(어려운연산); //👆위의 연산(1+1)을 하고 성공했으면 성공()을 출력해라!..
  //성공(); //성공판정 내리는법
  //실패(); //실패판정 내리는법
  //Promise 객체 이 안에서 성공()함수가 실행 되었으면,👇아래 있는 then안에 있는걸 실행한다!
  //Promise 객체 이 안에서 실패()함수가 실행 되었으면,👇아래 있는 catch안에 있는걸 실행한다!
});
//..👆위에 있는 Promise안의 어려운연산이 성공을 하면 then안에 들어있는 코드를 실행해라!
프로미스
  .then(function (결과) {
    console.log(결과); //2 -> 위의 어려운연산 결과
  })
  .catch(function () {
    console.log('실패했어요');
  });

//*then: 프로미스가 성공했을 경우 실행할 코드👇
//프로미스.then(function () {}).then(function () {});

//*catch: 실패했을 경우에 실행할 코드👇
//      -> 일반 콜백함수랑 비교하면, 콜백함수는 1번 실행 후, 2번 실행해주세요~ 였으면
//      -> Promise는 1번 실행 후, 성공시 2번 실행 / 실패시 3번 실행해주세요~
//프로미스.catch(function () {});

//*finally: 성공이든 실패든 여부에 상관없이 실행할 코드👇
//프로미스.finally(function () {});

//Ex2)
//1초후에 성공을 판정해주는 기계를 만들자!
var 프로미스2 = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공(); //1초후에 성공을 판정해준다!
  }, 1000);
});
프로미스2
  .then(function () {
    console.log('성공했어요');
  })
  .catch(function () {
    console.log('실패했어요');
  });

//*Promise의 3가지 상태
//1.fulfilled(resolved): 성공을 출력하고 나서 이렇게 변함!
//2.pending: 성공/실패 판정 대기중
//3.rejected: 실패

//*Promise에 대한 오해!
// -> 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아님!!
//    그냥 콜백함수 디자인의 대체품일 뿐!

//*Promise가 적용된 곳 들
//  1. $.ajax().done(function(){}).fail()
//    -> ajax와 Promise상당히 유사!
// 2. fetch().then().cach()
//    -> JS문법. fetch()는 항상 Promise를 리턴함!

//📍 23강 Promise 퀴즈 반드시 풀어보기!!!!!
