import { readFileSync } from 'fs'

export function getNumsFromString(input: string): number {
    const regex = /\d/g;
    const array = input.match(regex);
    if (array) {
        const a = array[0]
        const b = array.pop()
        const num = String(a).concat(String(b))
        return Number(num)
    } else return 0
}

function sum(total: number, num: number) {
    return total + Math.round(num)
}

export function addAll(data: string[]): number {
    const allNums: number[] = data.map((input) => {
        return getNumsFromString(input)
    })
    const result = allNums.reduce(sum)
    console.log(result)
    return result
}

function fetchData() {
    let data: string[] = []
    data = readFileSync('day1/data.txt').toString().split('/n')
    return data
}

addAll(fetchData())