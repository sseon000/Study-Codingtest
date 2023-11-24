function solution(n, arr1, arr2) {
  var answer = [];
  let temp1 = [];
  let temp2 = [];
  let temp3 = [];

  for(let i=0; i<n; i++) {
    temp1 = arr1[i].toString(2).padStart(n,0).split('');
    temp2 = arr2[i].toString(2).padStart(n,0).split('');
    temp3 = temp1.map((el, idx) => {
      if(el === '0' && temp2[idx] === '0') {
        return ' ';
      } else {
        return '#';
      }
    });
    /*
    console.log(temp1);
    console.log(temp2);
    console.log(temp3);
    console.log("------------------");
    */

    answer.push(temp3.join(''));
  } 

  return answer;
}

let n = 5
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

/*
n = 6
arr1 = [46, 33, 33 ,22, 31, 50];
arr2 = 	[27 ,56, 19, 14, 14, 10];
*/

solution(n, arr1, arr2);