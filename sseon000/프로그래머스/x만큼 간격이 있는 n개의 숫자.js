function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }

  return answer;
}

// ============================================== 다른 사람 풀이 ============================================ //
function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

/**
 * 1. Array(n) : 길이 n만큼의 배열
 * 2. Array.fill(x) : 배열의 값을 x로 채움
 */
// 미리 x로 배열을 채운다음 x만큼 커지니까 index * x 따봉...
