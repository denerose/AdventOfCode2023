import { readFileSync } from 'fs'

function fetchData(): string[] {
    let data: string[] = []
    data = readFileSync('day1/data.txt').toString().split('\n')
    return data
}

export function wordToNumber(input: string): number {
    let digit: number
    switch (input) {
        case 'one':
            digit = 1
            break
        case 'two':
            digit = 2
            break
        case 'three':
            digit = 3
            break
        case 'four':
            digit = 4
            break
        case 'five':
            digit = 5
            break
        case 'six':
            digit = 6
            break
        case 'seven':
            digit = 7
            break
        case 'eight':
            digit = 8
            break
        case 'nine':
            digit = 9
            break
        default:
            digit = Number(input);
    }
    return digit
}

export function findNums(input: string) {
    const regex1 = /(\d|one|t(wo|hree|en)|f(our|ive)|s(ix|even)|eight|nine)/
    const regex2 = /.*(?=(\d|one|two|three|four|five|six|seven|eight|nine)).*/
    const a = input.match(regex1)
    const arrayB = input.match(regex2) as string[]
    const b = arrayB[arrayB.length - 1]
    if (!a || !b) { throw new Error(`could not find num in ${input}`) }
    const concatString = `${wordToNumber(a[0])}${wordToNumber(b)}`
    return Number(concatString)
}

function sum(total: number, num: number) {
    return total + Math.round(num)
}

export function part2(input: string[]): number {
    const values: number[] = input.map((i) => {
        return findNums(i)
    })
    console.log(input.length)
    const result = values.reduce(sum)
    console.log(result)
    return (result)
}

part2(fetchData())