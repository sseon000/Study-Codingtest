function solution(ingredient){
  let answer = 0;
  let stack = []
  
  ingredient.forEach((el)=>{
      stack.push(el)
      const sLength = stack.length
      if(stack[sLength-4] === 1 && stack[sLength-3] === 2 &&  stack[sLength-2] === 3 && stack[sLength-1] === 1){
          for(let i=0;i<4;i++){
              stack.pop()
          }
          answer++
       } 
  })

  return answer;
}

let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
// ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]

solution(ingredient);