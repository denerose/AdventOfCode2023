import { readFileSync } from 'fs'

function fetchData() {
    let rawGames: string[] = []
    rawGames = readFileSync('day2/data.txt').toString().split('\n')
    return rawGames
}

export function part2() {

}