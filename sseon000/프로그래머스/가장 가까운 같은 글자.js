function solution(s) {
  let answer = [];
  return (answer = [...s].map((v, idx) => {
    console.log(
      `v: ${v}, arr: ${s.slice(0, idx)}, in: ${s.slice(0, idx).lastIndexOf(v)}`
    );
    return s.slice(0, idx).lastIndexOf(v) > -1
      ? idx - s.slice(0, idx).lastIndexOf(v)
      : s.slice(0, idx).lastIndexOf(v);
  }));
}

solution("banana");
