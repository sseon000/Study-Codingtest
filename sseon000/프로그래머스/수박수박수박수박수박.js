function solution(n) {
  let answer = '';
  
  if(n%2 === 0) {
     answer = '수박'.repeat(n/2)
  } else {
     if(n !==0 ) {
         answer = `${'수박'.repeat(n/2)}수`
     }
  }
  
  return answer;
}

// ====================== 다른 사람 풀이 ================= //

function solutionOhter(){
  return "수박".repeat(n).substring(0,n)
}

// 짝, 홀 나누지 말고 받은 n값 만큼 자른다.... 허허허