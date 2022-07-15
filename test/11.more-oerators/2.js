let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  //const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name; //👆를 왼쪽과 같이 간단하게 줄일 수 있음!
  console.log(ownerName);
}
printName(obj);
