function solution(nums) {
  let answer = new Set();
  
  for(let i=0; i<nums.length; i++) {
      if(answer.size < nums.length / 2) {
          answer.add(nums[i])
      } else {
          break;
      }
  }
  
  return answer.size;
}