function solution(babbling) {
  let answer = 0;
  let can = ["aya", "ye", "woo", "ma"];

  for(let i=0; i<babbling.length; i++) {
    let temp = babbling[i];
    console.log(`-------------temp: ${temp}, answer: ${answer}`);

    for(let j=0; j<can.length; j++) {
      if(temp.includes(can[j].repeat(2))) {
        break;
      }

      temp = temp.split(can[j]).join('@');
        console.log(`includes temp: ${temp}`);
    }

    if(temp.split('@').join('').length === 0) {
      answer++;
    }
  }

  return answer;
}