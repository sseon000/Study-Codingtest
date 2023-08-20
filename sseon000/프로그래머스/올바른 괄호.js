function solution(s){
  let answer = 0;
  for(let i=0; i<s.length; i++) {
      answer += s[i] === '(' ? 1 : -1;
      if(answer < 0) break;
  }
  return answer === 0 ? true : false;
}

// 첫번째 시도 
// for문으로 () 짝이맞으면 빼고, 아니면 푸쉬..
// 효율성 테스트 1,2 통과X
function solution2(s){
  let stack = [];
  for(let i=0; i<s.length; i++){
    if(stack[stack.length-1] === '(' && s[i] === ')'){
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? false : true
}