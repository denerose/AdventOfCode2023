import { readFileSync } from 'fs'

function fetchData() {
    let rawData: string[] = []
    rawData = readFileSync('day4/data.txt').toString().split('\n')
    return rawData
}

function sum(total: number, num: number) {
    return total + num
}

// function splitCards(input: string) {
//     const splitString = input.split(/\:|\|/g)
//     const cardNums = splitString[1].match(/\d{1,2}/g)
//     const winNums = splitString[2].match(/\d{1,2}/g)
//     return { cardNums, winNums }
// }

interface gameCard {
    cardID: string,
    cardNums: RegExpMatchArray | null,
    winNums: RegExpMatchArray | null,
    winCount: number
}

function splitCards(input: string): gameCard {
    const splitString = input.split(/\:|\|/g)
    const cardID = splitString[0]
    const cardNums = splitString[1].match(/\d{1,2}/g)
    const winNums = splitString[2].match(/\d{1,2}/g)
    let winCount: number = 0
    cardNums?.forEach((num) => {
        if (winNums?.includes(num)) {
            winCount++
        }
    })
    return { cardID, cardNums, winNums, winCount }
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
    console.log(`part1: final result = ${result}`)
    return result
}

part1(fetchData())

function createStack(data: string[]) {
    const newStack: gameCard[] = []
    data.forEach((cardString) => { newStack.push(splitCards(cardString)) })
    return newStack
}

function countWins(data: gameCard[], n: number) {
    let count = data[n].winCount
    let wins = 1
    for (let i = count; i > 0; i--) {
        wins += countWins(data, n + i)
    }
    return wins
}

export function part2(data: string[]) {
    const initialStack = createStack(data)
    let allWins = 0
    for (let index = 0; index < data.length; index++) {
        allWins += countWins(initialStack, index)

    }
    console.log(allWins)
    return allWins

}

part2(fetchData())