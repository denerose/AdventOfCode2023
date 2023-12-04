import { readFileSync } from 'fs'

const findNumRegEx = /\d{1,3}/g


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

function isStar(input: string) {
    const star = /\*/
    return star.test(input)
}

function isInt(input: string) {
    return Number.isInteger(Number(input))
}

function findLinkedNums(data: string[], x: number, y: number) {
    const numsFound: number[] = []
    const rowsToSearch = [y - 1, y, y + 1]

    rowsToSearch.forEach((row) => {
        const currentRow = data[row]
        let start = x - 1
        let end = x + 1
        if (!isInt(currentRow[x - 1]) && !isInt(currentRow[x]) && !isInt(currentRow[x + 1])) { return }
        else {
            if (isInt(currentRow[x - 1]) && isInt(currentRow[x]) && isInt(currentRow[x + 1])) {
                start = x - 1
                end = x + 1
            } else if (isInt(currentRow[x - 1])) {
                if (isInt(currentRow[x - 2]) && isInt(currentRow[x - 3])) {
                    start = x - 3
                }
                else {
                    start = x - 2
                }
            }
        }
        if (isInt(currentRow[x + 1])) {
            if (isInt(currentRow[x + 2]) && isInt(currentRow[x + 3])) {
                end = x + 3
            } else {
                end = x + 2
            }
        }
        const dataToCheck = currentRow.substring(start, end + 1)
        const matches = dataToCheck.match(findNumRegEx)
        matches?.forEach((numFound) => numsFound.push(Number(numFound)))

    })

    if (numsFound.length = 2) {
        return numsFound[0] * numsFound[1]
    }
    else return
}

function sum(total: number, num: number) {
    return total + num
}

export function part2(data: string[]) {
    const resultsArray: number[] = []

    data.forEach((row) => {
        let x = 0
        const y = data.indexOf(row)
        const rowArray = Array.from(row)
        rowArray.forEach((char) => {
            if (!isStar(char)) {
                x++
                return
            } else {
                let numFound = findLinkedNums(data, x, y)
                if (numFound) { resultsArray.push(numFound) }
                x++
            }
        })
    })

    const result = resultsArray.reduce(sum)
    console.log(result)
    return result
}

part2(fetchData())