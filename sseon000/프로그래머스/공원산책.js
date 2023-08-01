function solution(park, routes) {
  let result = [];
  let spot = [];

  // 1. 지도 가로, 세로
  let maxWidth = park[0].length - 1;
  let maxHeight = park.length - 1;

  // 2. 시작위치 찾기
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") spot = [i, j];
    }
  }

  console.log("시작 : ", spot);
  let widthSpot = spot[1];
  let heightSpot = spot[0];

  //3. 로봇강아지 산책
  routes.forEach((move, idx) => {
    let [direction, count] = move.split(" ");
    console.log(`===============${idx + 1}번째 이동==============`);
    console.log(`direction: ${direction}, count: ${count}`);

    let tempWidth = widthSpot;
    let tempHeight = heightSpot;
    let moveFlag = true;

    for (let i = 0; i < Number(count); i++) {
      if (direction === "E") tempWidth++;
      else if (direction === "W") tempWidth--;
      else if (direction === "S") tempHeight++;
      else if (direction === "N") tempHeight--;

      if (
        tempWidth > maxWidth ||
        tempWidth < 0 ||
        tempHeight > maxHeight ||
        tempHeight < 0 ||
        park[tempHeight][tempWidth] === "X"
      ) {
        console.log(`tempWidth: ${tempWidth}, tempHeight: ${tempHeight}`);
        moveFlag = false;
        break;
      }
    }

    if (moveFlag) {
      widthSpot = tempWidth;
      heightSpot = tempHeight;
    }
    console.log(`widthSpot: ${widthSpot}, heightSpot: ${heightSpot}`);
  });

  return (result = [heightSpot, widthSpot]);
}
