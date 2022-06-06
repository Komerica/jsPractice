// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
//위에 함수 Map을 써서 간단하게 만드는방법!
//방법1
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
//방법2
function replace(array, from, to) {
  return array.map((item) => {
    item === from ? to : item;
  });
}
//방법3
function replace(array, from, to) {
  return array.map((item) => {
    if (item === from) {
      return to;
    } else {
      return item;
    }
  });
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

//위 함수를 reduce를 이용하여 간단하게 바꿔보자!  *Reduce: 배열의 요소들을 접어서 접어서 값을 하나로!
//방법1)
function count(array, item) {
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0);
}

function count(array, item) {
  return array.reduce((count, value) => {});
}
console.log('Q2_Method1');
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// filter를 써서 더욱 간단하게 바꿔보자!  *Filter: 조건에 맞는 모든 아이템들을 새로운 배열로!
//방법2)
function count(array, item) {
  return array.filter((value) => value === item).length;
}

console.log('Q2_Method2');
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

//위 함수를 filter를 써서 간단하기 표현하기!
//방법1)
function match(input, search) {
  return input.filter((item) => search.includes(item));
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums
  .filter((num) => num > 5) //
  .reduce((avg, num) => avg + num / array.length, 0);
console.log(result2);

const result3 = nums.filter((value, index, array) =>
  console.log(value, index, array)
);
