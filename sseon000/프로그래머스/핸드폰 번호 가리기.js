function solution(phone_number) {
  let answer = phone_number.split('');
  let lastNum = answer.splice(-4,4);

  return Array(answer.length).fill('*').join('') + lastNum.join('');;
}

let phone_number = '01033334444';	
//phone_number = '027778888';

console.log(solution(phone_number))