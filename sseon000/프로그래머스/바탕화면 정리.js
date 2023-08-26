function solution(wallpaper) {
  let [lux,luy,rdx,rdy] = [Infinity, Infinity, -1, -1];
  
  for(let i=0; i<wallpaper.length; i++){
      let tempArr = wallpaper[i].split('');
      if(tempArr.includes('#')){
         lux = lux < i ? lux : i
          rdx = rdx > i ? rdx : i
          if(tempArr.indexOf('#') > -1){
              luy = luy < tempArr.indexOf('#') ? luy : tempArr.indexOf('#')
              rdy = rdy > tempArr.lastIndexOf('#') ? rdy : tempArr.lastIndexOf('#') 
          }
      }
  }
  
  return [lux, luy, rdx+1, rdy+1];
}