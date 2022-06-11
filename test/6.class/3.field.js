// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  get #display() {
    return `${this.#name}: ${this.#emoji}`;
  }
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);
console.log(apple.display);
console.log(apple.emoji);
//console.log(apple.#emoji); 이렇게는 접근 불가! private field는 get으로만 접근이 가능한듯(?)
