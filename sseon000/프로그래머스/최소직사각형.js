function solution(sizes) {
  let arr1 = [];
  let arr2 = [];

  sizes.forEach(v => {
    if(v[0] > v[1]) {
      arr1.push(v[0]);
      arr2.push(v[1]);
    } else {
      arr1.push(v[1]);
      arr2.push(v[0]);
    }
  });

  return Math.max(...arr1) * Math.max(...arr2)
}

function solution2(sizes) {
  let max1 = 0;
  let max2 = 0;

  sizes.forEach(v => {
    let [a,b] = v.sort(a,b => b-a);
    max1 = a > max1 ? a : max1;
    max2 = b > max2 ? b : max2;
  })

  return max1 * max2
}