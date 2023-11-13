function solution(x) {
  let answer = String(x).split('').reduce((acc,val) => {
    return acc+Number(val)  
  }, 0);
  
  return x % answer === 0 ? true : false;
}