function solution(array) {
  let answer = 0;
  let obj = {};
  
  for(let i=0; i<array.length; i++) {
      if(Object.hasOwn(obj, array[i])) {
        obj[array[i]] += 1 
      } else {
        obj[array[i]] = 1  
      }
  }
  
  for(let key in obj) {
     answer = answer >= obj[key] ? (answer === obj[key] ? -1 : answer) : obj[key]
  }
  
  return answer;
}