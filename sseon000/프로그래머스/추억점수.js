function solution(name, yearning, photo) {
    let score = {}
    
    for(let i=0; i<name.length; i++) {
        score[name[i]] = yearning[i]
    }
    
    let answer = photo.map( e => {
        return e.reduce((acc,cur) => {
            if(!score[cur]) score[cur] = 0
            return acc + score[cur]
        }, 0)
    })
    
    return answer
}