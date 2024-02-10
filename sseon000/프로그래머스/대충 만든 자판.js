function solution(keymap, targets) {
  let answer = new Array(targets.length).fill(0);
  let cnt = [];

  for(let i=0; i<targets.length; i++) {
    console.log(`iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii`)
    for(let j=0; j<targets[i].length; j++) {
      console.log(`jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj`)
      let word = targets[i][j];
      for(let k=0; k<keymap.length; k++) {
        console.log(`kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk`)
        console.log(`i: ${i}, j: ${j}, k: ${k}, word: ${word}`)
        if(keymap[k].indexOf(word) > -1) {
          cnt.push(keymap[k].indexOf(word)+1); // 있으면 인덱스+1
        } else {
          cnt.push(keymap[k].indexOf(word)); // 없으면 -1
        }
        console.log(`keymap[k].indexOf(word): ${keymap[k].indexOf(word)}, cnt: ${cnt}`);
      }

      cnt = cnt.filter(el => el != -1);
      if(cnt.length == 0) {
        answer[i] = -1
        cnt = [];
        console.log(`answer: ${answer}`)
        break;
      } else {
        answer[i] += Math.min(...cnt);
        cnt = [];
        console.log(`answer: ${answer}`)
      }
    }
  }

  answer = answer.map(el => {
    if(el === 0) {
      return -1
    } else {
      return el
    }
  })

  return answer;
}

let keymap = ["ABACD", "BCEFD"]
let targets = ["ABCD","AABB"] // [9,4]

keymap = ["AA"]
targets = ["B"] // [-1]

keymap = ["AGZ", "BSSS"]
targets = ["ASA","BGZ"] // [4, 6]

keymap = ["ABCDE"]
targets = ["FGHIJ"] // [-1]

keymap = ["BC"]
targets = ["AC", "BC"] // [-1, 3]

solution(keymap, targets);
