function solution(n, m) {
  let num1 = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      num1 = i;
    }
  }

  let num2 = (n * m) / num1;

  return [num1, num2];
}
