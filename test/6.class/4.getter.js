// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //함수에 접근하는 것처럼이 아닌, 일반 속성에 접근하는것 처럼 하고 싶다면..?
  //-> 접근자 프로퍼티(Accessor Property) 즉, Get!  Ex) student.fullName() -> student.fullName
  // + fullName은 함수로 만들 필요가 없이 firstName + lastName 조합으로 만들어진,..
  //  ..즉, 속성의 한부분이라고 간주되는 것이다.
  //   + 이러한 것들을 함수로 만들어야할때, get이라는 키워드를 붙여주면 함수호출하는 것처럼 호출하지 않고 속성에 접근하듯이 가능!
  //-> 아래와 같이 접근자 프로퍼티(Accessor Property)를 사용하는 경우는,
  //  + 무언가를 처리하는 행동(method)는 아닌데 property의 일부분이긴 한데, 뭔가를 조합해서 만들거나, Ex) firstName + lastName
  //  + get이나 set을 할때 특정한 일을 조금 더 해주고 싶다면, Ex) 특정한 숫자를 set할때 0이하의 숫자가 들어오면 0으로 set될 수있게
  //   -> 이 접근자 프로퍼티(Accessor Property)를 유용하게 사용가능!
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  //값을 할당할때 이 함수가 호출됨! Ex) student.fullName = '김철수'
  //  + '김철수'가 인자로 전달됨!
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';
