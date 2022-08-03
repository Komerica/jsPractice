let count = 0;
//export할건데 default(딱 이 함수 하나만 export 시켜서 외부에 노출시킬거야)
//'export default'는 모듈에서 딱 하나(Ex,하나의 함수)만 export할때 사용할 수 있음!
//Ex)👇
//export default function increase() {
//   count++;
//   console.log(count);
// }
//만약 여러가지를 export하고 싶으면 default를 쓸 수 없다!
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
