function solution(n) {
  let num = [0,1];
  
  for(let i=2; i<=n; i++){
     num[i] = (num[i-1] % 1234567 + num[i-2] % 1234567) % 1234567
  }
  
  return num[n];
}

// 재귀함수 호출은 테스트 통과 X
// n이 커지며 인트자료형 범위를 넘어가 오버플로우 발생 >> 모든 단계에서 % 연산 적용