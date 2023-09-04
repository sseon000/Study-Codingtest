function solution(n, m, section) {
  let answer = 0;
  let temp = Array(n).fill(0).map((val,idx) => section.includes(idx+1) ? 1 : val);
  
  while(true){
      if(temp.filter(val => val === 1).length === 0) {
          break;
      } 
      
      if(temp.filter(val => val === 1).length >= 2) {
          answer += 1;
          temp.splice(temp.indexOf(1),m);
      } else {
          answer += 1;
          break;
      }
  }
  
  return answer;
}

// 시간초과... 나는 무엇을 한 것인가...
// 다른 사람 풀이
function solution(n,m,section) {
  let answer = 0;
  let painted = 0;

  for(let i of section) { // 칠할 섹션 배열의 원소
    if(i<painted) continue; // 칠한 곳 보다 현재 원소가 작으면 더할 필요 없음

    painted = i+m; // 롤러 길이만큼 색칠
    answer += 1; // 칠한 횟 수 증가
  }

  return answer;
}