function solution(participant, completion) {
  let answer = '';
  
  // 정렬
  participant.sort();
  completion.sort();
  
  // 정렬한 배열을 순회하면서 다르면 return
  for(let i=0; i<participant.length; i++) {
     if(participant[i] !== completion[i]) {
         answer = participant[i]
        return answer
     }
  }
}