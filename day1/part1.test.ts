import { getNumsFromString, addAll } from "./part1"
import { readFileSync } from 'fs'

describe('getNums extracts first and last number from a string', () => {
    test('12k4 should produce 14', () => {
        expect(getNumsFromString("12k4")).toBe(14);
    });
    test('tr6h should produce 6', () => {
        expect(getNumsFromString("tr6h")).toBe(66);
    });
    test('moo should produce 0', () => {
        expect(getNumsFromString("moo")).toBe(0);
    });
});

describe('addAll example', () => {
    const input = [
        "1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet",
    ]
    test('should return correct result for example data', () => {
        expect(addAll(input)).toBe(142);
    });
    test('should return correct result for example data with extra line on end', () => {
        expect(addAll([...input, ''])).toBe(142);
    });
});

describe('addAll full', () => {
    const input = readFileSync('day1/data.txt').toString().split('\n');
    const result = 54634

    test('should return correct result for real data', () => {
        expect(addAll(input)).toBe(result);
    });
    test('should return correct result for example data with extra line on end', () => {
        expect(addAll([...input, ''])).toBe(result);
    });
});

