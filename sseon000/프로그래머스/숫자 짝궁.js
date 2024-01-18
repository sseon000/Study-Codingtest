function solution(X, Y) {
  let answer = [];
  let arrX = new Array(10).fill(0);
  X.split('').forEach(el => arrX[el]++);
  let arrY = new Array(10).fill(0);
  Y.split('').forEach(el => arrY[el]++);

  arrX.forEach((el, idx) => {
    if(el != 0 && arrY[idx] != 0) {
      let min = Math.min(el, arrY[idx]);
      answer.push(String(idx).repeat(min));
    }
  })
    
  return answer.length === 0 ? '-1' : Number(answer.join('')) === 0 ? "0" : answer.reverse().join('')
}

/*=============================== 시간 초과 ==========================
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

function solution2(X, Y) {
  let answer = "";
  let arrX = X.split('').sort((a,b) => b-a);
  let arrY = Y.split('').sort((a,b) => b-a);
  console.log(`arrX: ${arrX}`);
  
  
  for(let i=0; i<arrX.length; i++) {
      if(arrY.includes(arrX[i])) {
          arrY = [...arrY.splice(0,arrY.indexOf(arrX[i])), ...arrY.splice(arrY.indexOf(arrX[i])+1)]
          answer += arrX[i];
      }

      console.log(`arrY: ${arrY}`);
  }

  return answer.startsWith('0') ? '0' : answer === "" ? "-1" : answer;
}
*/