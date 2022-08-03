//만약 counter.js에서 export default가 아니라 그냥 export를 쓴다고 하면
//import increase from './counter2.js'; 👉 이것 처럼이 아닌 👇처럼 {중괄호}를 붙여줘야함!
//import { increase, getCount } from './counter2.js'; //export default가 아니라 export면 이와같이 {increase}를 해줘야 인식됨
//만약 increase라고 안받고 다른 이름으로 받아오고 싶으면..
//..👉 import { increase as increase1 } from './counter.js'이런식으로 받아오자!
//..이렇게 하면 increase1(); 와 같이 함수를 호출가능!
import * as counter from './counter2.js'; //이렇게 써주면 모든 함수들을 일반 객체를 쓰는 것처럼 접근할 수 있다!
//👉 Ex) counter.increase();  counter.getCount();

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
