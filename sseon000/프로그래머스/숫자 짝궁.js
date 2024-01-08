function solution(X, Y) {
  let answer = [];
  
  let arrX = X.split('');
  let arrY = Y.split('');
  
  console.log(`arrX: ${arrX}`);
  console.log(`arrY: ${arrY}`);
  let temp = [...arrY];
  
  for(let i=0; i<arrX.length; i++) {
      if(temp.includes(arrX[i])) {
          answer.push(arrX[i]);
          temp = [...temp.splice(0,temp.indexOf(arrX[i])), ...temp.splice(temp.indexOf(arrX[i])+1)]
          console.log(`i: ${i}, arrX[i]: ${arrX[i]}, arrY: ${arrY}, temp: ${temp}, answer: ${answer}`);
      }
  }

  let zeroArr = answer.filter(el => el === '0');
  if(zeroArr.length === answer.length) {
    answer = [...new Set(answer)];
  }
  answer = answer.sort((a,b) => b-a);  

  return answer.join('') === '' ? '-1' : answer.join('');
}
let X = "100"
let Y = "2345"

// X = "100"
// Y = "203045"

// X = "100"
// Y = "123450"

// X = "12321"
// Y = "42531"

// X = "5525"
// Y = "1255"

solution(X,Y);