function solution(score) {
  let totalArr = score.map((v) => v[0] + v[1]);
  let sortArr = [...totalArr].sort((a, b) => b - a);
  return totalArr.map((v) => sortArr.indexOf(v));
}
