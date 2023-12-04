import { readFileSync } from "fs";
import { part1, part2 } from "./day4";

describe("part1 example", () => {
    const input = [
        "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
        "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
        "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
        "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
        "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
        "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    ];
    const expectedResult = 13;
    test("should return correct result for example data", () => {
        expect(part1(input)).toBe(expectedResult);
    });
});
describe("extra example tests", () => {
    const input = [
        {
            input: ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"],
            expected: 8,
        },
    ];
    input.forEach((edgecase) => {
        test(`should return correct result for ${edgecase.input}`, () => {
            expect(part1(edgecase.input)).toBe(edgecase.expected);
        });
    });
});

//test doubleNumber(number,timesToDouble):number

// describe("doubleNumber tests", () => {
//     const input = [
//         {
//             num: 1,
//             count: 1,
//             expected: 2,
//         },
//         {
//             num: 1,
//             count: 3,
//             expected: 8,
//         }
//     ]

//     input.forEach((edgecase) => {
//         test(`should return correct result for ${edgecase.num}`, () => {
//             expect(doubleNumber(edgecase.num, edgecase.count)).toBe(edgecase.expected);
//         });
//     });
// })

describe("part1 full", () => {
    const input = readFileSync("./src/day4/input.txt").toString().split("\n");
    const result = 25004;
    const knownBadResults = [0];

    const part1FullOutput = part1(input);
    test("should return correct result for real data", () => {
        expect(part1FullOutput).toBe(result);
    });
    test("the result should not be any of the known bad results", () => {
        expect(knownBadResults.includes(part1FullOutput)).toBe(false);
    });
});

// describe("part2 example", () => {
//     const input = [
//         "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
//         "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
//         "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
//         "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
//         "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
//         "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
//     ];
//     const result = 30;
//     test("should return correct result for example data", () => {
//         expect(part2(input)).toBe(result);
//     });
// });

// describe("part2 example", () => {
//     const input = [
//         {
//             input: ["Card 1: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
//                 "Card 2: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"],
//             expected: 2,
//         },
//         {
//             input: ["Card 1: 31 18 13 56 72 | 31 77 10 23 35 67 36 11",
//                 "Card 2: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"],
//             expected: 3,
//         },
//         {
//             input: ["Card 1: 31 18 4 56 1 | 31 18 4 23 35 67 36 1",
//                 "Card 2:  1 18 13 56 72 | 18  1 10 23 35 67 36 11",
//                 "Card 3: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
//                 "Card 4: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
//                 "Card 5: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
//             ],
//             expected: 5 + 4 + 4,
//         },
//     ]
//     input.forEach(t => {

//         test("should return correct result", () => {
//             expect(part2(t.input)).toBe(t.expected);
//         });

//     });
// });

// describe("part2 full", () => {
//     const input = readFileSync("./src/day4/input.txt").toString().split("\n");
//     const result = 0;
//     const knownBadResults = [0, 674, 1137];
//     const part1FullOutput = part2(input);

//     // test("should return correct result for real data", () => {
//     //     expect(part2(input)).toBe(result);
//     // });


//     test("the result should not be any of the known bad results", () => {
//         expect(knownBadResults.includes(part1FullOutput)).toBe(false);
//     });
// });