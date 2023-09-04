function solution(k, m, score) {
  let answer = 0;
  let minIdx = m-1;
  score.sort((a,b)=> b-a);
  
  for(let i=0; i<Math.floor(score.length / m); i++){
     answer += score[minIdx] * m;
     minIdx += m;
  }
  
  return answer;
}

// Array.sort((a,b) => b-a): 배열 내림차순 정렬~
// Math.floor(Num): 내림