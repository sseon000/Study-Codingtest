function solution(seoul) {
  let seoulKim = '';
  let answer = '';
  console.log(seoul);
  
  for(let i=0; i<=seoul.length; i++) {
      console.log(seoul[i]);
      if(seoul[i] == "Kim"){
          seoulKim = i;
      }
  }
  
  console.log(answer);
  console.log(seoulKim);
  
  return '김서방은 ' + seoulKim + '에 있다';
}