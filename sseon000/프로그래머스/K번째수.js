function solution(array, commands) {
    let answer = [];
    let tmpArr = [];
    
    for(let i=0; i<commands.length; i++){
       tmpArr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b)
       answer.push(tmpArr[commands[i][2]-1]);
    }
    
    return answer;
}