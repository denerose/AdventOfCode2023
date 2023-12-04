import { readFileSync } from 'fs'

function fetchData() {
    let rawData: string[] = []
    rawData = readFileSync('day3/data.txt').toString().split('\n')
    return rawData
}

function create2dArray(rawData: string[]) {
    const mappedArray: string[][] = []
    rawData.forEach((rowString) => {
        mappedArray.push(Array.from(rowString))
    })
    return mappedArray
}

function findStar(input: string) {
    const star = /\*/
    return star.test(input)
}

export function part2(data: string[]) {

}