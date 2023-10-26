// ==================== 내 풀이 : 시간 초과 ======================= //
function solution(n){
  let prime = 1; // 2 포함

  for(let i=3; i<=n; i++){ // 1은 제외, 2는 소수 포함 이므로 3부터
    if(i%2 === 0) continue; // 짝수 제외
    for(let j=2; j<=i; j++){
      if((i !== j) && (i%j === 0)) break;
      else if(i === j) prime++;
    }
  }
  return prime
}

// ==================== 다른 사람 풀이 ======================= //

// 에라토스테네스의 체(소수 찾기) : n까지의 수에서 2부터 n의 제곱근까지 반복하면서 해당 수의 배수를 제외하고 남은 수가 소수
function solution(n){
  // 소수면 1(true) 아니면 0(false)
  let prime = Array(n).fill(1); // n개의 길이 만큼 1로(기본값 true -> 소수가 아닌수를 false로 변경) 채운 배열
  prime[0] = 0; // 0번째 index 숫자 1은 소수가 아니므로 0(false)

  for(let i=2; i*i<=n; i++){ // n까지의 수 중 2부터 그 수의 제곱근까지 반복
    if(prime[i-1]){ 
      for(let j=i*i; j<=n; j+=i){ // 반복을 i*i부터 시작하는 것은 그 지언의 값은 j이전의 수에서 이미 확인함
        prime[j-1]=0;
      }
    }
  }
  return prime.filter(n => n===1).length;  
}