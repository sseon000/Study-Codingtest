/*
function solution(players, callings) {
    callings.forEach(c => {
        for(let i=0; i<players.length; i++) {
            let temp = '';
            if(c === players[i]) {
                temp = players[i-1];
                players[i-1] = players[i];
                players[i] = temp
                break;
            }
        }
    })
    return players
}
*/

// 위 코드 시간복잡도 문제로 테스트케이스 10~13실패... 문제풀이 참고... 2023.07.08!!
// map

function solution(players, callings) {
    const indexList = new Map()

    for (let i = 0; i < players.length; i++ ) {
        indexList.set(players[i], i)
    }

    /*
    callings = ["kai","kai","mine","mine"]
    players = ["mumu","soe","poe","kai","mine"]
    indexList = {"mumu": 0, "soe": 1, "poe": 2, "kai": 3, "mine": 4}
    */

    for (const name of callings) {
        const passed = players[indexList.get(name) - 1] 
        const temp = players[indexList.get(name) - 1]
        
        players[indexList.get(name) - 1] = players[indexList.get(name)];
        players[indexList.get(name)] = temp;

        indexList.set(name, indexList.get(name) - 1)
        indexList.set(passed, indexList.get(passed) + 1)
    }

    return players;
}