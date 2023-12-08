function solution(N, stages) {
  let answer = [];
  let temp = [];
  let person = stages.length;
  
  for(let i=0; i<N; i++) {
      answer.push(stages.filter((el) => i+1 === el).length)
  }
  
  // 실패율과 스테이지를 객체형태로 함께 저장
  answer.forEach((el, idx) => {
      temp.push({'rate': el/person, 'stage': idx+1})
      person = person - el
  })
  
  temp.sort((a,b) => b.rate - a.rate)
  answer = temp.map(el => el.stage)
     
  return answer;
}