const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: π`);
  },
};
apple.display();

const peach = {
  name: 'peach',
  display: function () {
    console.log(`${this.name}: π`);
  },
};
peach.display();

console.log(apple);
console.log(peach);

//μμ±μ ν¨μ(κ°μ²΄μμ±κΈ°)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = function () {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //return this; // μλ΅κ°λ₯
}

const apple2 = new Fruit('apple', 'π');
const peach2 = new Fruit('peach', 'π');
console.log(apple2);
apple2.display();
console.log(peach2);
peach2.display();
