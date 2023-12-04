import { part2 } from "./part2";
import { readFileSync } from 'fs'


describe("part2 example", () => {
    const input = [
        "467..114..",
        "...*......",
        "..35..633.",
        "......#...",
        "617*......",
        ".....+.58.",
        "..592.....",
        "......755.",
        "...$.*....",
        ".664.598..",
    ];
    const result = 467835;
    test("should return correct result for example data", () => {
        expect(part2(input)).toBe(result);
    });
});



describe("part2 full", () => {
    const input = readFileSync("./day3/data.txt").toString().split("\n");
    const result = 82301120;
    const knownBadResults = [0, 33921455, 64452296]

    test("should return correct result for real data", () => {
        expect(part2(input)).toBe(result);
    });
    test("the result should not be any of the known bad results", () => {
        expect(knownBadResults.includes(part2(input))).toBe(false);
    });
});
