// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //super: 내가 상속하고 있는 부모를 가리킴
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding (부모에 있는 eat method를 덮어 씌움!)
  eat() {
    super.eat(); //부모의 함수를 호출하고 아래 추가적인 작업을 해주고 싶다면 super.eat();
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
