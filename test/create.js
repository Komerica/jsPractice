const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};
apple.display();

const peach = {
  name: 'peach',
  display: function () {
    console.log(`${this.name}: 🍑`);
  },
};
peach.display();

console.log(apple);
console.log(peach);

//생성자 함수(객체생성기)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = function () {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //return this; // 생략가능
}

const apple2 = new Fruit('apple', '🍎');
const peach2 = new Fruit('peach', '🍑');
console.log(apple2);
apple2.display();
console.log(peach2);
peach2.display();
