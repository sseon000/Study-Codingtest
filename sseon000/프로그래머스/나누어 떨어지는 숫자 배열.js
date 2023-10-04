function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter(el => el % divisor === 0);
  answer.sort((a,b) => a-b)
  
  return answer.length === 0 ? [-1] : answer;
}