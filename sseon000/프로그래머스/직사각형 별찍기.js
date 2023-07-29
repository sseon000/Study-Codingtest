process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const str = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(str);
  }
});

/*
process.stdin stream은 표준 입력 데이터를 읽기위해 사용되는 Node.js의 내장 stream이다. 
  실제로 브라우저에서는 사용할 수 없고 window.prompt, window.alert 등을 사용해야한다.

process.stdin.setEncoding('utf8')
  process.stdin의 인코딩 방식을 세팅. 주로 모든 유니코드 문자를 나타낼 수 있는 UTF-8을 사용한다.

process.stdin.on('data', dat a => { ... } )
  데이터를 수신할 때 마다 호출되는 이벤트 리스너이다.콜백 함수로 넘겨지는 'data' 인자는 수신받은 데이터를 담고있는 buffer 객체이다. 

 process.stdin은 읽기 전용 스트림
 process.stdout은 표준 출력 스트림
*/
