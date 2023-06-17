import { generateRandomPassword } from "../index";

const tests = [
    -1, -6, -5, -1, 0, 1, 2, 3, 4, 7, 10, 12, 15, 19, 23, 28, 30, 33, 36, 50, 64, 70, 84,
];

test(`Does generateRandomPassword return a string ?`, () => {
    const result = [];
    for (let i = 0; i < tests.length; i++) {
        const data = generateRandomPassword(tests[i]);
        expect(data.length).toBeGreaterThanOrEqual(tests[i]);
        expect(typeof data).toBe("string");
        result.push({
            argument: tests[i],
            characters: data.length,
            result: data,
        });
    }

    console.table(result);
    // console.log("RAW", result);
});
