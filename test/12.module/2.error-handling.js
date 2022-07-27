// try catch finally
function readFile(path) {
  //   throw new Error('파일 경로를 찾을 수 없음');
  return '파일의내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path); //에러가 나올것 같은 함수면 try{}안에서 먼저 시도를 해보고
  } catch (error) {
    //👇 에러가 나오면 어떻게 보여줄지 catch(error){}에서 정한다!
    console.log('----Name----');
    console.log(error.name);
    console.log('----Message----');
    console.log(error.message); //👆위의 throw new Error에서 설정해준 메세지
    console.log('----Stack----');
    console.log(error.stack);
    //console.log(error); //👆처럼 다 일일이 하나하나 출력안해도 그냥 error하나만 출력해줘도 정보 다 나옴
    content = '기본내용';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!');
  }
  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);
