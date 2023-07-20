function solution(cards1, cards2, goal) {
  let answer = "Yes";
  goal.forEach((v) => {
    console.log(`v: ${v}, c1: ${c1}, c2: ${c2}`);
    if (cards1[0] === v) {
      cards1.shift();
    } else if (cards2[0] === v) {
      cards2.shift();
    } else {
      answer = "No";
      return;
    }
  });

  return answer;
}

let cards1 = ["i", "drink", "water"];
let cards2 = ["want", "to"];
let goal = ["i", "want", "to", "drink", "water"];

/*
let cards1 = ['i','water','drink'];
let cards2 = ['want','to'];
*/

solution(cards1, cards2, goal);
