import getPasswordStrength, { generateRandomPassword } from "../index";

const tests = [
    -1, -6, -5, -1, 0, 1, 2, 3, 4, 7, 10, 12, 15, 19, 23, 28, 30, 33, 36, 50, 64, 70, 84,
];

test(`Does generateRandomPassword() Works correctly ?`, () => {
    const result = [];
    for (let i = 0; i < tests.length; i++) {
        const data = generateRandomPassword(tests[i]);
        expect(data.length).toBeGreaterThanOrEqual(tests[i]);
        expect(typeof data).toBe("string");

        const response = getPasswordStrength(data);

        result.push({
            argument: tests[i],
            characters: data.length,
            result: data,
            strength: response.strength,
        });
    }

    console.table(result);
    // console.log("RAW", result);
});
