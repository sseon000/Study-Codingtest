function solution(s, n) {
  let answer = s.split('').map(val => {
      val = val.charCodeAt();
      if(val >= 65 && val <= 90) {
         val += n;
         if(val > 90) val -= 26
      } else if(val >= 97 && val <= 122) {
         val += n;
         if(val > 122) val -= 26
      }
      val = String.fromCharCode(val);
      return val
  });
  
  return answer.join('');
}

// String.charCodeAt(): 문자 -> 아스키코드
// String.fromCharCode(param): param을 아스키코드 -> 문자