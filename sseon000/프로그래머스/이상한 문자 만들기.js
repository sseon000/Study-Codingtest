function solution(s) {
    let sArr = s.split(' ');
    sArr = sArr.map(v => {
        let word = [...v]
        console.log(word);
        word = word.map((w,idx) => {
            return idx % 2 === 0 ? w.toUpperCase() : w.toLowerCase();
        })
        return word.join('')
    })
    return sArr.join(' ');
}