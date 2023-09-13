function solution(price, money, count) {
  let answer = -1;
  let tempArr = [];
  
  for(let i=1; i<=count; i++) {
    tempArr.push(price * i);
  }

  // console.log(tempArr);

  answer = tempArr.reduce((acc,val) => {
    return acc + val
  }, 0)

  // console.log(answer, money)

  answer = answer > money ? answer - money : 0

  return answer;
}
