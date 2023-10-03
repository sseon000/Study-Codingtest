function solution(s) {
  var answer = '';
  let len = s.length;
  
  if((len % 2) !== 0) {
      answer = s.substring((len/2),(len/2)+1)
  } else {
      answer = s.substring((len/2)-1,(len/2)+1)
  }
  
  return answer;
}