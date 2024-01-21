function solution(n, lost, reserve) {
  let answer = n;

  let lostSort = lost.sort((a,b) => a-b).filter(el => !reserve.includes(el)); // 옷을 빌려야 하는 학생
  let reserveSort = reserve.sort((a,b) => a-b).filter(el => !lost.includes(el)); // 여벌옷이 있는 학생
  let setReserve = new Set(reserveSort);
  let length = lostSort.length;

  console.log(`lostSort: ${lostSort}, reserveSort: ${reserveSort}`);

  // 1-1. lostSort를 순회하면서 +1, -1 앞뒤 학생이 있으면
  // lostSort 에서 빼고, reserveSort 에서 빼고
  // 순회를 마쳤을때 answer - 옷을 못빌린 학생
  for(let i=0; i<length; i++) {
    if(setReserve.size === 0) break;

    if(setReserve.has(lostSort[i]-1)) {
      setReserve.delete(lostSort[i]-1);
      lostSort[i] = 99;
    }
      
    if(setReserve.has(lostSort[i]+1)) {
      setReserve.delete(lostSort[i]+1);
      lostSort[i] = 99;
    }
  }

  console.log(`순회 후 lostSort: ${lostSort}, lostSort.length: ${lostSort.length}`);
  lostSort = lostSort.filter(el => el != 99);
  answer -= lostSort.length;

  return answer;
}