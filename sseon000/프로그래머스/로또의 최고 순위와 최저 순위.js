function solution(lottos, win_nums) {
  let answer = [];
  let wins = {
      '6': 1,
      '5': 2,
      '4': 3,
      '3': 4,
      '2': 5,
      '1': 6,
      '0': 6,
  }
  let zeroCnt = lottos.filter(num => num === 0).length
  let matchCnt = 0 
  
  lottos.forEach(num => {
      if(win_nums.includes(num)) matchCnt++
  })
  
  if(matchCnt === 6) {
      answer = [1,1]
  } else {
      if(zeroCnt < 2) {
          answer = [6,6]
      }
  }
  
  answer = [wins[matchCnt+zeroCnt],wins[matchCnt]]
  
  return answer;
}