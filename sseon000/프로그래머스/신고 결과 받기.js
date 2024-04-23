function solution(id_list, report, k) {
  let answer = [];
  let arr = [];
  // 유저{id, report, call)를 담은 배열 생성
  id_list.forEach(el => {
    let obj = {
      id: '',
      report: [],
      call: 0
    };
    obj.id = el;
    arr.push(obj);
    answer.push(0);
  })

  console.log(`arr: ${JSON.stringify(arr)}`);
  console.log(`report: ${JSON.stringify(report)}`)

  // 한 유저가 동일 유저 신고시는 1회로 처리
  report.forEach(el => {
    // 본인이 신고한 유저 저장
    let user = arr[id_list.indexOf(el.split(' ')[0])];
    console.log(`el[0]: ${el.split(' ')[0]}, el[1]: ${el.split(' ')[1]}, user: ${JSON.stringify(user)}`);
    // 신고한 목록에 없을 경우 저장
    if(!(user.report).includes(el.split(' ')[1])) {
      user.report.push(el.split(' ')[1]);
      // 신고받은 사람 신고 횟수 증가
      let target = arr[id_list.indexOf(el.split(' ')[1])];
      if(target.call == 0) {
        target.call = 1;
      } else {
        target.call += 1;
      }
    } else {

    }
    
  })

  console.log(`arr: ${JSON.stringify(arr)}`);

  id_list.forEach((el,idx) => {
    let len = arr[idx].report.length; // 유저의 신고한 대상수
    for(let i=0; i<len; i++) { // 대상수만큼 루프
      if(arr[id_list.indexOf(arr[idx].report[i])].call >= k) {
        answer[idx] += 1;
      };
    }
  })

  return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let k = 2;
// result [2,1,1,0]

// id_list = ["con", "ryan"];
// report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// k = 3;
// result [0,0]

solution(id_list, report, k);