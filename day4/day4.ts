import { readFileSync } from 'fs'

function fetchData() {
    let rawData: string[] = []
    rawData = readFileSync('day4/data.txt').toString().split('\n')
    return rawData
}

function sum(total: number, num: number) {
    return total + num
}

function splitCards(input: string) {
    const splitString = input.split(/\:|\|/g)
    const cardNums = splitString[1].match(/\d{1,2}/g)
    const winNums = splitString[2].match(/\d{1,2}/g)
    return { cardNums, winNums }
}

function findScore(n: number) {
    if (n < 1) return n
    else {
        let ex = n - 1
        return Math.pow(2, ex)
    }
}

export function part1(data: string[]) {
    const cardScores: number[] = []

    data.forEach((card) => {
        const winNums = splitCards(card).winNums
        const cardNums = splitCards(card).cardNums
        let winCount: number = 0
        cardNums?.forEach((num) => {
            if (winNums?.includes(num)) {
                winCount++
            }
        })
        if (winCount > 0) {
            const cardScore = findScore(winCount)
            // console.log(`win count: ${winCount} = ${cardScore}`)
            if (cardScore) cardScores.push(cardScore)
        }
    })

    const result = cardScores.reduce(sum)
    console.log(`final result: ${result}`)
    return result
}

part1(fetchData())

export function part2(data: string[]) {

}