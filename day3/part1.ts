import { readFileSync } from 'fs'

const symbolsRegEx = /[^.|^\d|^\s]/g

function fetchData() {
    let rawGames: string[] = []
    rawGames = readFileSync('day3/data.txt').toString().split('\n')
    return rawGames
}

function findLinkedNums(input: string) {

}

function part1(data: string[]) {
    data.forEach((rowString) => {
        const y = data.indexOf(rowString)
        const row = Array.from(rowString)
        row.forEach((char) => {
            symbolsRegEx.test(char)
        })

    })
}