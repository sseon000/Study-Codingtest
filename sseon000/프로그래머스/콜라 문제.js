function solution(a, b, n) {
  let answer = 0;

  while (a <= n) {
    let x = ~~(n / a) * a; // 마트에 줄 콜라 병 수
    let y = (x / a) * b; // 마트에서 받을 콜라 병 수
    n = n - x + y;
    answer += y;
  }

  return answer;
}
