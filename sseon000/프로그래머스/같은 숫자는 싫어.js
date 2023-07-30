function solution(arr) {
  let answer = [];
  answer = arr.filter((v, idx) => v !== arr[idx - 1]);
  return answer;
}
