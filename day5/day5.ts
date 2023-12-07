import { readFileSync } from 'fs'

function fetchData() {
    let rawData: string[] = []
    rawData = readFileSync('day5/data.txt').toString().split('\n')
    return rawData
}