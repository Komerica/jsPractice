const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]); // H
console.log(text[1]); // e
console.log(text[2]); // l
console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); // l

console.log(text.indexOf('l')); //앞에서부터 l이 있는 index를 찾아서 반환   // 2
console.log(text.lastIndexOf('l')); //뒤에서부터 l이 있는 index를 찾아서 반환    // 9

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '            space       ';
console.log(space.trim());

const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2));
