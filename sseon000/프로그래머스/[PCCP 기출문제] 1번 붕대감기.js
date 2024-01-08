function solution(bandage, health, attacks) {
  let time = 0; // 총 시간
  let answer = health; // 현재체력
  let maxH = health;
  let continueBandTime = 0; // 연속성공
  let attacked = false; // 공격 
  let damage = 0; // 몬스터 공격력

  // 총 시간 구하기
  attacks.forEach(element => {
    time = time > element[0] ? time : element[0];  
  });

  console.log(`time 총시간: ${time}`);

  for(let i=1; i<=time; i++) {
    attacked = false; // 공격 초기화
    // 0초는 초기화 상태이므로 1초부터 시작
    console.log(`i 현재시간: ${i}`);
    // console.log(`answer 현재체력: ${answer}`);
    if(answer <= 0) { 
      // 체력이 0보다 작으면 종료
      answer = -1;
      break;
    } else {
      // 공격을 받았는지 확인
      attacks.forEach(el => {
        // console.log(`el[0] attacks배열의 초 확인: ${el[0]}`);
        // console.log(`i 현재시간: ${i}`);
        // 배열을 순회하며 현재 시간 i와 attacks의 공격시간과 같으면 공격 + 첫번째 원소 제거
       if(i === el[0]) {
        attacked = true;
        damage = el[1]
        attacks.shift();
       } 
      })

      // console.log(`attacked 공격여부: ${attacked}`);
      // console.log(`damage 공격력: ${damage}`);
      // console.log(`attacks attacks배열: ${attacks}`);

      if(!attacked) {
        // 공격받지 않았으면 연속성공 증가 + 체력 회복
        if(answer < maxH) {
          // 현재체력이 최대채력보다 작을때만 회복
          continueBandTime++; // 연속성공++
          answer += bandage[1]; // 체력 회복
          if(continueBandTime === bandage[0]) {
            continueBandTime = 0; // 연속성공 시간 초기화
            answer += bandage[2]; // 연속성공 보너스 체력회복
          }
        } else { 
          answer = maxH;
        }

        // console.log(`continueBandTime 연속성공: ${continueBandTime}`);
        // console.log(`answer + bandage[1] 체력회복후: ${answer}`);

      } else {
        // 공벽받으면 공격 초기화 + 연속성공 초기화 + 체력 소진
        attacked = false; // 공격 초기화
        continueBandTime = 0; // 연속성공 초기화
        answer -= damage; // 체력 소진
        // console.log(`continueBandTime 연속성공: ${continueBandTime}`);
        // console.log(`answer -= damage 공격받은후: ${answer}`);
      }
    }
  }

  console.log(1111)
  if(answer <= 0) answer = -1;

  return answer;
}