function solution(left, right) {
  let answer = 0;
  let temp = [];

  for(let i=left; i<=right; i++) {
    let cnt = 0;  
    for(let j=1; j<=i/2; j++) {
      if(i % j === 0) {
        ++cnt
      }
      console.log(`i: ${i}, j: ${j}, i % j: ${i % j}, cnt: ${cnt}}`)
    }

    if((cnt+1) % 2 === 0) {
      temp.push(i);
    } else {
      temp.push(`-${i}`);
    }
    
    console.log(`----------------------------------`)

  }

  console.log(temp)

  answer = temp.reduce((acc,val) => { 
    return acc + Number(val)
  }, 0)

  return answer;
}

let left = 13;
let right = 17;
left = 24;
right = 27;

console.log(solution(left, right));