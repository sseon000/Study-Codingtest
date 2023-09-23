function solution(n) {
  let answer = String(n).split('').reverse();
  
  answer = answer.map(n => ~~n)
  return answer;
}