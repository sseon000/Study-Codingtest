function solution(numbers){
  let answer = [];

  for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
        console.log(`i: ${numbers[i]}`,`j: ${numbers[j]}`,`numbers[i] + numbers[j]: ${numbers[i] + numbers[j]}`)
        if(!answer.includes(numbers[i] + numbers[j])) {
            answer.push(numbers[i] + numbers[j])
        }
    }
  }

  return answer.sort((a,b)=> a-b);
}

let numbers = [2,1,3,4,1]

solution(numbers);