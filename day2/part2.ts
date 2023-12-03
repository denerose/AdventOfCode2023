import { readFileSync } from 'fs'

function fetchData() {
    let rawGames: string[] = []
    rawGames = readFileSync('day2/data.txt').toString().split('\n')
    return rawGames
}

const redRegEx = /\d{1,} red/g
const greenRegEx = /\d{1,} green/g
const blueRegEx = /\d{1,} blue/g

function extractHighest(game: string, regex: RegExp) {
    const matches = game.match(regex)
    let bestNum: number = 0
    matches?.forEach((value: string) => {
        const numberFound = value.match(/\d{1,}/g)
        if (numberFound && Number(numberFound[0]) > bestNum) bestNum = Number(numberFound[0])
    })
    return bestNum
}

function findGameResult(game: string) {
    let red = extractHighest(game, redRegEx)
    let blue = extractHighest(game, blueRegEx)
    let green = extractHighest(game, greenRegEx)
    return (red * blue * green)
}

function sum(total: number, num: number) {
    return total + Math.round(num)
}

export function part2(data: string[]) {
    const powers: number[] = data.map(findGameResult)
    const result = powers.reduce(sum)
    console.log(result)
    return result
}

part2(fetchData())