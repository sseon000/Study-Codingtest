function solution(arr) {
  var answer = [];
  answer = arr.filter((val) => val != Math.min(...arr))
  return answer.length === 0 ? [-1] : answer;
}