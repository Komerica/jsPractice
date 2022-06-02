//애플코딩 반복문(25강 for of 강의)
var 오브젝트 = { name: 'Kim', age: 30 };
//👇 오브젝트를 만들어주면 안에 숨겨진 key/value값이 3개 더들었다!
console.log(Object.getOwnPropertyDescriptor(오브젝트, 'name')); //그 숨겨진 3개의 key/value값을 출력하는 방법!
//👆 -> { value: 'Kim', writable: true, enumerable: true, configurable: true }
//enumerable(셀수있는)이 true면 'Kim'이라는 값이 반복문에서 출력이 가능하다는 말!
//writable / enumerable / configurable -> Default는 항상 True!
//  -> 즉, 객체를 만들면 항상 기본으로 true가 박혀있음
for (var key in 오브젝트) {
  console.log(오브젝트[key]);
}

console.clear();

class Parent {}
Parent.prototype.name = 'Park';
var 오브젝트 = new Parent();
//'오브젝트'에 key/value값을 부여한적이 없지만, for-in 반복문을 돌리면 유전자도 출력됨!(쓸모없는기능)
for (var key in 오브젝트) {
  console.log(오브젝트[key]); //Park
}

for (var key in 오브젝트) {
  if (오브젝트.hasOwnProperty(key)) {
    //👆 hasOwnProperty: 내가 key라는걸 직접 가지고 있나? -> 이렇게 하면 내가 직접 갖고있는 key값만 출력이 된다!
    //   -> 이게 없으면 부모로 부터 상속된 유전자인 'Park'도 출력해줌!
    console.log(오브젝트[key]);
  }
}

var 어레이 = [2, 3, 4, 5];
for (var 자료 of 어레이) {
  console.log(자료); //2,3,4,5
}
var 어레이1 = '가나다라';
for (var 자료 of 어레이1) {
  console.log(자료); //가,나,다,라
}

//document.getElementsByClassName(); //[HTML1, HTML2]; -> 이게 NodeList!(Array와 비슷)
//document.querySelectorAll();

//*반복문 용도*
//for-in반복문: Object자료형에만 씀!
//for, forEach(): Array자료형에 씀!
//for-of반복문: Array, String, NodeList, Map, Set -> 전부 iterable한 자료형임!
