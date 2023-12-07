import { readFileSync } from 'fs'
import { part1, part2 } from './day5'

describe('part1 example', () => {
    const input = [
        "seeds: 79 14 55 13",
        "",
        "seed-to-soil map:",
        "50 98 2",
        "52 50 48",
        "",
        "soil-to-fertilizer map:",
        "0 15 37",
        "37 52 2",
        "39 0 15",
        "",
        "fertilizer-to-water map:",
        "49 53 8",
        "0 11 42",
        "42 0 7",
        "57 7 4",
        "",
        "water-to-light map:",
        "88 18 7",
        "18 25 70",
        "",
        "light-to-temperature map:",
        "45 77 23",
        "81 45 19",
        "68 64 13",
        "",
        "temperature-to-humidity map:",
        "0 69 1",
        "1 0 69",
        "",
        "humidity-to-location map:",
        "60 56 37",
        "56 93 4",
    ]
    const expectedResult = 35
    test('should return correct result for example data', () => {
        expect(part1(input)).toBe(expectedResult)
    })
})

// describe("findDestinationValue", () => {
//     const input = [
//         { destinationRangeStart: 50, sourceRangeStart: 98, rangeLength: 2 },
//         {
//             destinationRangeStart: 52,
//             sourceRangeStart: 50,
//             rangeLength: 48
//         }
//     ]

//     const testValues = [
//         { input: 0, expected: 0 },
//         { input: 1, expected: 1 },
//         // ...
//         { input: 12, expected: 12 },
//         // ...
//         { input: 48, expected: 48 },
//         { input: 49, expected: 49 },
//         { input: 50, expected: 52 },
//         { input: 51, expected: 53 },
//         // ...
//         { input: 96, expected: 98 },
//         { input: 97, expected: 99 },
//         { input: 98, expected: 50 },
//         { input: 99, expected: 51 },
//     ]

//     testValues.forEach(t => {
//         test(`should return ${t.expected} for ${t.input}`, () => {
//             expect(findDestinationValue(input, t.input)).toBe(t.expected)
//         })
//     });
// })
// describe('extra example tests', () => {
//     const input = [
//         {
//             input: [""],
//             expected: 0,
//         },
//         {
//             input: [""],
//             expected: 0,
//         },
//     ]
//     input.forEach((edgecase) => {
//         test(`should return correct result for ${edgecase.input}`, () => {
//             expect(part1(edgecase.input)).toBe(edgecase.expected)
//         })
//     })
// })

describe('part1 full', () => {
    const input = readFileSync('./src/day5/input.txt').toString().split('\n')
    const result = 173706076
    const knownBadResults = [0]

    const part1FullOutput = part1(input)
    test('should return correct result for real data', () => {
        expect(part1FullOutput).toBe(result)
    })
    test('the result should not be any of the known bad results', () => {
        expect(knownBadResults.includes(part1FullOutput)).toBe(false)
    })
})

// describe('part2 example', () => {
//     const input = [
//         "seeds: 79 14 55 13",
//         "",
//         "seed-to-soil map:",
//         "50 98 2",
//         "52 50 48",
//         "",
//         "soil-to-fertilizer map:",
//         "0 15 37",
//         "37 52 2",
//         "39 0 15",
//         "",
//         "fertilizer-to-water map:",
//         "49 53 8",
//         "0 11 42",
//         "42 0 7",
//         "57 7 4",
//         "",
//         "water-to-light map:",
//         "88 18 7",
//         "18 25 70",
//         "",
//         "light-to-temperature map:",
//         "45 77 23",
//         "81 45 19",
//         "68 64 13",
//         "",
//         "temperature-to-humidity map:",
//         "0 69 1",
//         "1 0 69",
//         "",
//         "humidity-to-location map:",
//         "60 56 37",
//         "56 93 4",
//     ]
//     const result = 46
//     test('should return correct result for example data', () => {
//         expect(part2(input)).toBe(result)
//     })
// })


// describe('part2 full', () => {
//     const input = readFileSync('./src/day5/input.txt').toString().split('\n')
//     const result = 11611182
//     const knownBadResults = [0]
//     const part1FullOutput = part2(input)

//     test('should return correct result for real data', () => {
//         expect(part2(input)).toBe(result)
//     })

//     test('the result should not be any of the known bad results', () => {
//         expect(knownBadResults.includes(part1FullOutput)).toBe(false)
//     })
// })