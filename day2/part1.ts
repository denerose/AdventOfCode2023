import { readFileSync } from 'fs'

// Win conditions 12 red cubes, 13 green cubes, and 14 blue cubes
const impossibleRegex = /((1[5-9])(?!:)|([2-9]\d)(?!:)|(1[3-9] red)|(1[4-9] green))/g

function fetchData() {
    let rawGames: string[] = []
    rawGames = readFileSync('day2/data.txt').toString().split('/n')
    return rawGames
}

function checkGame(game: string) {
    if (game.match(impossibleRegex)) return false
    else return true
}


export function part1(gamesData: string[]) {
    const winningGames: [] = []

}