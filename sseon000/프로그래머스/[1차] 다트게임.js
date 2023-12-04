function solution(dartResult) {
  let answer = [];
  
  for(let i=0; i<dartResult.length; i++){
      if(isNaN(dartResult[i])){ // 문자
        if(dartResult[i] === 'S') {
         answer[answer.length-1] = (Math.pow(~~answer[answer.length-1],1))   
        } else if(dartResult[i] === 'D') {
          answer[answer.length-1] = (Math.pow(~~answer[answer.length-1],2))  
        } else if(dartResult[i] === 'T') {
          answer[answer.length-1] = (Math.pow(~~answer[answer.length-1],3))  
        } else if(dartResult[i] === '*') {
          answer[answer.length-2] = answer[answer.length-2] * 2 
          answer[answer.length-1] = answer[answer.length-1] * 2      
        } else if(dartResult[i] === '#') {            
          answer[answer.length-1] = answer[answer.length-1] * -1
        }
      } else { //-------------------숫자
          if(dartResult[i] === '0') {  
              if(isNaN(dartResult[i-1])) { // 숫자 0인데 바로전이 문자인경우
               answer.push(dartResult[i])   
              } else {//--------------------- 숫자 0인데 바로전도 숫자일경우
               answer[answer.length-1] = answer[answer.length-1] + '0'   
              } 
          } else { // 1자리수
             answer.push(dartResult[i]) 
          }       
      }
  }
  
  answer = answer.reduce((acc,v) => acc+v,0)
  
  return answer;
}