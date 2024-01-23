function solution(s) {
    let answer = 0;
    let x = s[0];
    let xCnt = 1; 
    let diffCnt = 0; 
    
    // s가 1자인 경우 
    if(s.length == 1) return 1;
  
    // 1자인 경우 제외, 2번째 문자부터 읽음
    for(let i=1; i<s.length; i++) { 
      // console.log(`=================================================`);
      // console.log(`i: ${i}, s.length: ${s.length}, answer: ${answer}`);
      // console.log(`111 x: ${x}, xCnt: ${xCnt}, diffCnt: ${diffCnt}`)
      // x와 x가 아닌 다른 글자
      if(x == s[i]) { 
        xCnt++;
      } else { 
        diffCnt++;
      }
      // console.log(`222 x: ${x}, xCnt: ${xCnt}, diffCnt: ${diffCnt}`)
      // 두 횟수가 같아지면 문자열 분리
      if(xCnt == diffCnt) {
        // 1. 분해 수 count
        answer++;
        // 2. 문자열 분해
        // console.log(`bb s: ${s}`);
        s = s.slice(i+1);
        // console.log(`aa s: ${s}`);
        // 3. x문자, x횟수, 다른문자 횟수 초기화
        x = s[0];
        xCnt = 1;
        diffCnt = 0;
        i = 0;
        // console.log(`333 x: ${x}, xCnt: ${xCnt}, diffCnt: ${diffCnt}, s: ${s}`);
        if(s.length == 0) {
            break;
        }
        
        // 마지막 분리후 "aabb/a" 1글자만 남는경우
        if(s.length <= 1) {
            answer++;
            break;
        }
      }
    }
    // console.log(`xCnt: ${xCnt}`)
    // if(answer == 0) answer++; 
    // 마지막 분리후 xCnt = 1로 초기화 << for문 종료 이후에 "aabb/aa" 처럼 같은 문자만 남는경우 xCnt가 초과
    if(xCnt != 1) answer++;
  
    return answer;
}