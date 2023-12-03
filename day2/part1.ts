import { readFileSync } from 'fs'

// Win conditions 12 red cubes, 13 green cubes, and 14 blue cubes
const impossibleRegex = /((1[5-9])(?!:)|([2-9]\d)(?!:)|(1[3-9] red)|(1[4-9] green))/g

function fetchData() {
    let rawGames: string[] = []
    rawGames = readFileSync('day2/data.txt').toString().split('\n')
    return rawGames
}

function checkGame(game: string): boolean {
    if (game.match(impossibleRegex)) return false
    else return true
}

function extractGameNumber(game: string) {
    let extract = game.match(/\d{1,}/)
    if (extract) return Number(extract[0])
    else throw new Error(`no game number in ${game}`)
}

function sum(total: number, num: number) {
    return total + Math.round(num)
}

export function part1(gamesData: string[]) {
    const winningGames: string[] = gamesData.filter(checkGame)
    const numsToAdd: number[] = []
    winningGames.forEach((game) => {
        numsToAdd.push(extractGameNumber(game))
    })
    let result = numsToAdd.reduce(sum)
    console.log(result)
    return result

}

part1(fetchData())