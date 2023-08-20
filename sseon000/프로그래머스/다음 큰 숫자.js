function solution(n) {
  let answer = n;
  let oneCnt = 0;
  let initOneCnt = n.toString(2).replaceAll('0','').length;
  
  while(true){
      answer++;
      oneCnt = (answer.toString(2)).replaceAll('0','').length;
      if(oneCnt === initOneCnt) break;
  }
  
  return answer
}

// Number.toString(x) -> x진수로 변환