function solution(survey, choices) {
  let answer = '';
  let types = {'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0}
  let score = 0;
  let [negative,positive] = ["",""];

  for(let i=0; i<choices.length; i++) {
    [negative,positive] = survey[i].split("");
    score = Math.abs(choices[i] - 4);
    if(choices[i] < 4) { // 비동의
      types[negative] += score;
    }

    if(choices[i] > 4) { // 동의
      types[positive] += score;
    }
  }

  let typeKey = Object.keys(types);
  let typeA = ''
  let typeB = '';
  for(let j=0; j<typeKey.length; j+=2) {
    typeA = types[typeKey[j]];
    typeB = types[typeKey[j+1]];

    if(typeA >= typeB) {
      answer += typeKey[j];
    }

    if(typeB > typeA) {
      answer += typeKey[j+1];
    }

  }

  return answer;
}

