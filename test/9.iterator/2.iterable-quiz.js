var someString = 'hi';
console.log(typeof someString); //string
console.log(typeof someString[Symbol.iterator]); //function
console.log(typeof someString[Symbol.iterator]()); //object

var iterator = someString[Symbol.iterator]();
console.log(iterator + ''); //[object String Iterator]

console.log(iterator.next()); //{ value: 'h', done: false }

console.log([...someString]); //[ 'h', 'i' ]

var someString = new String('hi');
// need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function () {
  return {
    next: function () {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    _first: true,
  };
};

console.log([...someString]); //[ 'bye' ]
console.log(someString + ''); //hi

//********************************************************************/
// [Symbol.iterator](): Iterator{ next(): {value, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
//0, 1, 2, 3..., 9
//0, 2, 4, 6..., 18

//아래에 있는 for..of에서 순회가 가능하게 하기 위해서는 iterable protocol을 따라야하는데,..
const multiple = {
  //..이걸 따르기 위해서는 객체(multiple) 안에 [Symbol.iterator]()라는 함수를 만들면 된다!..
  //..이 함수를 호출했을 때, iterator(return{})[이터레이터 오브젝트]를 반환하면 된다!..
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    //..이 iterator 객체는 next()라는 함수가 꼭 있어야한다!
    return {
      next() {
        //next를 호출할때마다 value와 done이라는 키를 가진 새로운 객체(오브젝트)를 반환하면 된다!
        //..next를 호출할때마다 계속 새로운 값(value)을 만들고, 끝인지 아닌지 true/false를 done에서 보여줌!
        // true: 끝 / false: 계속 지속
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple2 = makeIterable(0, 10, (n) => n * 2);

//👆위(line7-23)에서 Iteration protocol을 따랐기 때문에 multiple이라는 객체는 for..of이라는 연산자에서 사용이 가능하다!
for (const num of multiple) {
  console.log(num);
}
for (const num of multiple2) {
  console.log(num);
}
