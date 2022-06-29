//Map은 자료의 연관성(=>)을 나타내기 위해 쓰는 자료형!
//Object의 경우에는 Key에 text만 쓸수있다는 점과는 달리..
//..Map의 경우에는 Key에 모든 자료형을 다 쓸 수 있다.
//Ex) var person = new Map();   person.set([1,2,3],'Kim');
//    -> Map(1) { [ 1, 2, 3 ] => 'Kim' }

const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]); //map은 object와 같이 동적으로 key에 접근불가!
console.log(map2.get(key)); //map은 get()함수를 이용해서 접근해야한다
