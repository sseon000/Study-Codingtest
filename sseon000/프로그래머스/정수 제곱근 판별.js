function solution(n) {
  let answer = 0;
  let temp = Math.sqrt(n);
  
  answer = temp % 1 === 0 ? Math.pow(temp+1, 2) : -1;
  
  return answer;
}