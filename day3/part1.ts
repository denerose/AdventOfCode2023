import { readFileSync } from 'fs'

const symbolsRegEx = /[^.|^\d|^\s]/
const numsRegEx = /\d/
const findNumRegEx = /\d{1,3}/g

const partNumbers: number[] = []

function fetchData() {
    let rawData: string[] = []
    rawData = readFileSync('day3/data.txt').toString().split('\n')
    // let mappedData = create2dArray(rawData)
    return rawData
}

function create2dArray(rawData: string[]) {
    const mappedArray: string[][] = []
    rawData.forEach((rowString) => {
        mappedArray.push(Array.from(rowString))
    })
    return mappedArray
}

function findLinkedNums(data: string[], x: number, y: number) {
    const rowsToSearch = [y - 1, y, y + 1]
    rowsToSearch.forEach((row) => {
        let xStart: number = x - 1
        let xEnd: number = x + 1
        if (
            !numsRegEx.test(data[row][x - 1])
            && !numsRegEx.test(data[row][x])
            && !numsRegEx.test(data[row][x + 1])) {
            return
        }
        else {
            if (numsRegEx.test(data[row][x - 1])) {
                if (numsRegEx.test(data[row][x - 3]) && numsRegEx.test(data[row][x - 2])) {
                    xStart = x - 3
                }
                else if (numsRegEx.test(data[row][x - 2])) {
                    xStart = x - 2
                }
                else xStart = x - 1
            }
            else {
                xStart = x - 1
            }

            if (numsRegEx.test(data[row][x + 1])) {
                if (!numsRegEx.test(data[row][x + 2])) {
                    xEnd = x + 1
                }
                else if (!numsRegEx.test(data[row][x + 3])) {
                    xEnd = x + 2
                }
                else if (numsRegEx.test(data[row][x + 3])) {
                    xEnd = x + 3
                }
            }
            else { xEnd = x + 1 }
        }
        const stringToCheck = data[row].substring(xStart, xEnd + 1)
        const partsFound = stringToCheck.match(findNumRegEx)
        if (partsFound) partsFound.forEach((part) => {
            partNumbers.push(Number(part))
        })
    })

}

function sum(total: number, num: number) {
    return total + num
}

export function part1(data: string[]) {
    data.forEach((row) => {
        let i = 0
        const y = data.indexOf(row)
        const rowArray = Array.from(row)
        rowArray.forEach((char) => {
            if (!symbolsRegEx.test(char)) {
                i++
                return
            }
            else {
                const x = i
                findLinkedNums(data, x, y)
                i++
            }
        })
    })
    const result = partNumbers.reduce(sum)
    console.log(result)
    return result
}

part1(fetchData())