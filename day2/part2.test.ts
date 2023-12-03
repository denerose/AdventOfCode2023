import { readFileSync } from "fs";
import { part2 } from "./part2";

describe("part2 example", () => {
    const input = [
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];
    const result = 2286;
    test("should return correct result for example data", () => {
        expect(part2(input)).toBe(result);
    });
});

describe("part2 full", () => {
    const input = readFileSync("./src/day2/input.txt").toString().split("\n");
    const result = 72706;

    test("should return correct result for real data", () => {
        expect(part2(input)).toBe(result);
    });
});