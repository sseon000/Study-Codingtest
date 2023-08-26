function solution(n, words) {
  let gameObj = {};
  let answer = [0,0];
  let tempWord = '';
  let gameArr = [];
  let overCheck = false;
  
  for(let i=1; i<n+1; i++){
      gameObj[i] = [];
      for(let j=0; j<words.length; j++){
          if ( ((j+1) % n === i) || ((i === n) && ((j+1) % n ===0)) ){
              console.log(`### push words: ${words[j]}`)
              gameObj[i].push(words[j]);
          }
      }
      console.log(`------------------------------------------------------------`)
  }
  console.log(`### gameObj: ${JSON.stringify(gameObj)}`)
  
  for(let k=0; k<gameObj[1].length; k++){
      if(overCheck) break;
      for(let l=1; l<n+1; l++){
          console.log(`l: ${l} / k: ${k} / tempWord: ${tempWord} / gameObj[l][k]: ${gameObj[l][k]}`);
          if(l === 1 && k === 0){
              tempWord = gameObj[l][k];
          } else {
              console.log(`### else`)
              console.log(`tempWord.split('')[tempWord.length-1]: ${tempWord.split('')[tempWord.length-1]} / gameObj[l][k].split('')[0]: ${gameObj[l][k].split('')[0]} / (tempWord.split('')[tempWord.length-1] != gameObj[l][k].split('')[0]): ${(tempWord.split('')[tempWord.length-1] != gameObj[l][k].split('')[0])}`)
              if( (tempWord.split('')[tempWord.length-1] != gameObj[l][k].split('')[0]) || (gameArr.includes(gameObj[l][k])) ){
                  answer = [l, k+1];
                  overCheck = true;
                  break;
              } else {
                  tempWord = gameObj[l][k]
              }
          }
          gameArr.push(tempWord)
      }
      console.log(`--------------------------------------------------------------------------`)
  }

  return answer;
}