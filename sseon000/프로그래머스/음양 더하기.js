function solution(absolutes, signs) {
    let answer = 123456789;
    
    answer = absolutes.reduce((acc, val, idx) => {
        let num = val;
        if(!signs[idx]) num = +(`-${val}`);
        return acc + num
    }, 0)
    
    return answer;
}