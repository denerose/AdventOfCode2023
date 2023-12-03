import { findNums, part2, wordToNumber } from "./part2"

describe('findNums regex matches', () => {
    test('two1nine should = 29 ', () => {
        expect(findNums('two1nine')).toBe(29);
    });
    test('abcone2threexyz should = 13', () => {
        expect(findNums("abcone2threexyz")).toBe(13);
    });
    test('one should = 11', () => {
        expect(findNums("twone")).toBe(21);
    });
});

describe('wordToNum works', () => {
    test('nine = 9', () => {
        expect(wordToNumber("nine")).toBe(9);

    });
    test('9 = 9', () => {
        expect(wordToNumber("9")).toBe(9);

    });
});

describe('part2 example', () => {
    const input = [
        "two1nine",
        "eightwothree",
        "abcone2threexyz",
        "xtwone3four",
        "4nineeightseven2",
        "zoneight234",
        "7pqrstsixteen",
    ]
    const result = 281
    test('should return correct result for example data', () => {
        expect(part2(input)).toBe(result);
    });
    // test('should return correct result for example data with extra line on end', () => {
    //     expect(part2([...input, ''])).toBe(result);
    // });
});

describe('part2 edgecases', () => {
    const edgecases = [
        {
            input: ["eighthree"],
            expected: 83,
        },
        {
            input: ["sevenine"],
            expected: 79,
        }, {
            input: ["abcone2eighthreexyz"],
            expected: 13,
        },
        {
            input: ["oneight"],
            expected: 18,
        },
        {
            input: ["oneighthree"],
            expected: 13,
        },
        {
            input: ["threeightwonehr2eeighthree"],
            expected: 33,
        },
        {
            input: ["one"],
            expected: 11,
        },
        {
            input: ["threeight"],
            expected: 38,
        },
        {
            input: ["fiveight"],
            expected: 58,
        },
        {
            input: ["twone"],
            expected: 21,
        },
        {
            input: ["twone3four"],
            expected: 24,
        },
        {
            input: ["4nineeightseven2"],
            expected: 42,
        },
        {
            input: ["eighttwo"],
            expected: 82,
        }, {
            input: ["three2fiveonexrllxsvfive"],
            expected: 35,
        }, {
            input: ["9fgsixzkbscvbxdsfive6spjfhzxbzvgbvrthreeoneightn"],
            expected: 98,
        },
        {
            input: ["five712"],
            expected: 52,
        },
        {
            input: ["1111111111111"],
            expected: 11,
        },
        {
            input: ["one2on2eone2oneone2onethreeone"],
            expected: 11,
        },
        {
            input: ["2wotwo1ne"],
            expected: 21,
        },
        {
            input: ["atwonea"],
            expected: 21,
        },

    ]

    edgecases.forEach((edgecase) => {
        test(`should return correct result for ${edgecase.input}`, () => {
            expect(part2(edgecase.input)).toBe(edgecase.expected);
        });
    });
});