function solution(s, skip, index) {
  let answer = '';
  let temp = [];

  for(let i = 0; i < s.length; i++) { 
      let j = 1;
      while(true) {
        // alert(`temp: ${temp}, temp.length: ${temp.length}`);
        let askCode = s[i].charCodeAt()+j;
        let newWord = ''
        if(askCode <= 122) {
          newWord = String.fromCharCode(askCode);
        } else {
          newWord = String.fromCharCode(askCode-26);
        }

        if(skip.includes(newWord)) {
          j++;
        } else {
          temp.push(newWord);
          j++;
        }
        if(j > 26) {
          j = j%26;
        }
        if(temp.length == index) break;
      }
      answer += temp.pop();
      temp = [];
  }

  return answer;
}

let s = "aukks";
let skip = "wbqd";
let index = 5;

solution(s, skip, index);