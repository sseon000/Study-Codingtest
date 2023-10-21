function solution(s){
  let temp = s.toLowerCase().split('');
  let pCnt = 0;
  let yCnt = 0;
  
  for(let i=0; i<temp.length; i++){
     if(temp[i] === 'p') pCnt++;
      else if(temp[i] === 'y') yCnt++;
  }
  
  return pCnt === yCnt ? true : false;
}