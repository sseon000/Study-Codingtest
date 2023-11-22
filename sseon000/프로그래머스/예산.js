function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  let dSort = d.sort((a,b)=> a-b)
  
  for(let i=0; i<dSort.length; i++) {
     if(sum + dSort[i] <= budget) {
         sum += dSort[i]
         answer++
     } else {
         answer = i
         break
     }
  }
  
  return answer;
}