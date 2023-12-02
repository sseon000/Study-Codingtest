function solution(answers) {
  let answer = [];
  let per1 = [1,2,3,4,5]
  let per2 = [2,1,2,3,2,4,2,5]
  let per3 = [3,3,1,1,2,2,4,4,5,5]
  let corCnt = [0,0,0]
  
  for(let i=0; i<answers.length; i++) {
      if(answers[i] === per1[i%per1.length]) corCnt[0]++
      if(answers[i] === per2[i%per2.length]) corCnt[1]++
      if(answers[i] === per3[i%per3.length]) corCnt[2]++
  }
     
  let max = Math.max(...corCnt)
  for(let j=0; j<corCnt.length; j++) {
     if(max === corCnt[j]) answer.push(j+1)
  }
  
  return answer;
}