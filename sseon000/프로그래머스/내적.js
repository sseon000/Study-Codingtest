function solution(a, b) {
  let answer = 0;
  
  answer = a.reduce((acc, _, idx) => {
      return acc + (a[idx]*b[idx])
  }, 0) 
  
  return answer;
}