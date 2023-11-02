function solution(s) {
  let answer = s.split('').map(e => e.charCodeAt()).sort((a,b) => b-a);
  return answer.map(e => String.fromCharCode(e)).join('');
}