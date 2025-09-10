import { capitalizeTextFirstChar, createArray, random, timeConversion } from "../assignment.js";


// Problem 1: capitalizeTextFirstChar
describe("capitalizeTextFirstChar", function () {
    it("should return a string when input is a string", function () {
        expect(typeof capitalizeTextFirstChar("hello world")).toBe("string");
    });

    it("should capitalize the first character of each word", function () {
        expect(capitalizeTextFirstChar("i'm ahmed ali")).toBe("I'm Ahmed Ali");
    });

    it("should throw an error if input is not a string", function () {
        expect(function () {
            capitalizeTextFirstChar(12);
        }).toThrow();
    });
});

// Problem 2: createArray
describe("createArray", function () {
    it("should return an array", function () {
        expect(Array.isArray(createArray(3))).toBeTrue();
    });

    it("should return array of length 2 including 0", function () {
        const result = createArray(2);
        expect(result.length).toBe(2);
        expect(result).toContain(0);
    });

    it("should return array of length 3 and not include 3", function () {
        const result = createArray(3);
        expect(result.length).toBe(3);
        expect(result).not.toContain(3);
    });
});

// Problem 3: random
describe("random", function () {
    it("should return a number", function () {
        const value = random(1, 5);
        expect(typeof value).toBe("number");
    });

    it("should return a number between 5 and 7 inclusive", function () {
        const value = random(5, 7);
        expect(value).toBeGreaterThanOrEqual(5);
        expect(value).toBeLessThanOrEqual(7);
    });

    it("should return NaN if only one argument is passed", function () {
        const value = random(3);
        expect(isNaN(value)).toBeTrue();
    });
});

// Problem 4: timeConversion
describe("timeConversion", function () {
    it("should return a string", function () {
        expect(typeof timeConversion("07:45:54PM")).toBe("string");
    });

    it("should convert PM time correctly without AM/PM", function () {
        expect(timeConversion("07:45:54PM")).toBe("19:45:54");
    });

    it("should convert midnight correctly", function () {
        expect(timeConversion("12:00:00AM")).toBe("00:00:00");
    });
});
