function solution(numbers) {
    let answer = 0;
    
    answer = [1,2,3,4,5,6,7,8,9,0].reduce((acc,val) => {
       if(numbers.includes(val)) {
         return acc + 0  
       } else {
         return acc + val
       }     
    },0);
    
    return answer
}