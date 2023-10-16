function solution(strings, n) {
  let answer = strings.sort((a,b) => {
      if(a[n] > b[n]) return 1
      if(a[n] == b[n]) return (a > b) ? 1 : -1
      if(a[n] < b[n]) return -1
  });
  return answer;
}

/**
 * Array.sort((a,b) => {})
 * (a,b) => {} : comfareFn
 *  comfareFn이 양수면 자리바꾸고, 음수면 그대로
 */

// ====================== 다른 사람 풀이 ================= //

function solutionOhter(){
  return strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}

/**
 * String.localeCompare(param: String)
 * String과 param: String 비교
 * String > param: 양수
 * String < param: 음수
 * String = param: 0
 */