function solution(s)
{
    let answer = 0;
    let temp = [];
    
    for(let i=0; i<s.length; i++){
       if(temp[temp.length-1] === s[i]) {
         temp.pop()  
       } else {
           temp.push(s[i])
       }     
    }
      
    if(temp.length == 0) {
        answer = 1
    }
    
    return answer;
}