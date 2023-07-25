function solution(k, score) {
  let answer = [];
  let crown = [];

  answer = score.map((v) => {
    if (crown.length < k) {
      crown.push(v);
    } else {
      if (Math.min(...crown) < v) {
        crown = [v, ...crown.splice(0, k - 1)];
      }
    }
    crown.sort((a, b) => b - a);
    //console.log(`v: ${v}, crown: ${crown}, answer: ${answer}, Math.min: ${Math.min(...crown)}`)
    return Math.min(...crown);
  });

  return answer;
}
