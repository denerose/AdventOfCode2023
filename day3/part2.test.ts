import { part2 } from "./part2";

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
    test("should return correct result for example data with extra line on end", () => {
        expect(part2([...input, ""])).toBe(result);
    });
});

// describe("part2 full", () => {
//   const input = readFileSync("./src/day3/input.txt").toString().split("\n");
//   const result = 0;

//   test("should return correct result for real data", () => {
//     expect(part2(input)).toBe(result);
//   });
// });