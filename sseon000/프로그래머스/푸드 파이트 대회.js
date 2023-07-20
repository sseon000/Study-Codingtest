function solution(food) {
  let arrP1 = [];
  let arrP2 = [];

  food.forEach((v, idx) => {
    if (idx !== 0) {
      let foodItem = ~~(v / 2);
      for (let i = 1; i <= foodItem; i++) {
        arrP1.push(idx);
        arrP2.unshift(idx);
      }
    }
  });

  return `${arrP1.join("")}0${arrP2.join("")}`;
}

let food = [1, 3, 4, 6];
//let food = [1,7,1,2]

solution(food);

// ============================================== 다른 사람 풀이 ============================================ //
function solution2(food) {
  let answer;
  for (let i = 0; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join();
}

/**
 * 1. String.repeat(count) : String을 count만큼 반복
 * 2. Array.reverse() : 배열을 뒤집음
 */
// 배열을 두 개 만들필요 없이 하나의 스트링을 만들고 전개해서 뒤집는다... 따봉
// repeat함수를 활용해 반복문 1번만 생각... 따봉
