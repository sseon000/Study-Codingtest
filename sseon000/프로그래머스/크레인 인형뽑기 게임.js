function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for(let i=0; i<moves.length; i++) {
    let idx = moves[i] - 1;
    console.log(`=== i === idx: ${idx}`);
    
    for(let j=0; j<board.length; j++) {
      if(board[j][idx] != 0) {
        console.log(`=== j === board[j][idx]: ${board[j][idx]}`);
        if(basket[basket.length-1] == board[j][idx]) {
          board[j][idx] = 0;
          basket.pop();
          answer += 2;
          console.log(`=== j === basket: ${basket}, board: ${board}, answer: ${answer}`);
        } else {
          basket.push(board[j][idx]);
          board[j][idx] = 0;
          console.log(`=== j === basket: ${basket}, board: ${board}, answer: ${answer}`);
        }
        break;
      } else {
        console.log(`=== j === board[j][idx]: ${board[j][idx]}`);
      }
    }
  }

  return answer;
}

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];

board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
moves = [1, 2, 3, 4];

solution(board, moves)
