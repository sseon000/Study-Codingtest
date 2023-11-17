function solution(n) {
    let answer = 1; // 자기자신
    let sum = 0;
    let num = 1;
    
    while(true){
        for(let i=num; sum<n; i++){
            sum+=i;
            if(sum === n) answer++
        }
        sum = 0;
        num++;
        if(num === n) break;
    }
    
    return answer;
}
// 반복문 2개는 효율성 테스트 탈락...

// ====================== 다른 사람 풀이 ================= //
// 주어진 자연수의 약수 중에서 홀수인 수... >> 이런건 어디서 배우나...? 
function solutionOther(n) {
  let answer = 0;
  for(let i=1; i<=n; i++) {
    if(n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}



