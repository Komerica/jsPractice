//Node에서 this는 모듈을 가리키긴 하지만 JS에서 대체적으로 this란 전역객체를 가리킴
//Browser에서 this는 window를 가리킨다!(window가 전역객체이다)
console.log(globalThis); //전역을 가리킴
console.log(this); //전역을 가리킴
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
