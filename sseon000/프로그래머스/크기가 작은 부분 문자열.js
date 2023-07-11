function solution(t, p) {
  let pLen = p.split("").length;
  let tArr = [...t];

  tArr = tArr
    .map((v, idx) => {
      if (idx <= tArr.length - pLen) {
        return tArr.slice(idx, idx + pLen).join("");
      }
    })
    .filter((v) => Number(v) <= Number(p));

  return tArr.length;
}
