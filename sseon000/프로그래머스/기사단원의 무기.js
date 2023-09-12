function solution(number, limit, power) {
  let numberArr = [];
  for(let i=1; i <= number; i++) {
      let 약수 = 0;
      
      for(let j=1; j <= i/2; j++) {
          if(i % j === 0) {
              ++약수;
          }
      }
      numberArr.push(약수+1);
  }
  
  return numberArr.map(num => num > limit ? power : num ).reduce((acc,val) => acc + val);
}