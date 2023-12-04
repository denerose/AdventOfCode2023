import { readFileSync } from "fs";
import { part1, partNumbers } from "./part1";

describe("part1 example", () => {
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
    const expectedResult = 4361;
    test("should return correct result for example data", () => {
        expect(part1(input)).toBe(expectedResult);
    });
});

describe("part1 full", () => {
    const input = readFileSync("./day3/data.txt").toString().split("\n");
    const result = 532331;

    test("should return correct result for real data", () => {
        expect(part1(input)).toBe(result);
    });
});