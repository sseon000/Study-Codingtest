function solution(s) {
  let beforeChange = s;
  let robinCnt = 0;
  let disZeroCnt = 0;
  let changeTarget = 0;
  let afterChange = '';
  
  while(true) {
      robinCnt++;
      disZeroCnt += beforeChange.length - beforeChange.replaceAll('0','').length
      changeTarget = beforeChange.replaceAll('0','').length;
      afterChange = parseInt(changeTarget).toString(2);
      beforeChange = afterChange;
      
      if(beforeChange === '1') break;
  }
  
  return [robinCnt, disZeroCnt];
}