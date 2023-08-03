import getPasswordStrength from "../index";

const tests = ["123edf", "superstrictpassword", "^y6Y", "TY6^^&k", "12F$#jj%"];

test("Is Working Correctly", () => {
    const result: any[] = [];

    tests.forEach((str) => {
        const g = getPasswordStrength(str);
        expect(getPasswordStrength(str)).toStrictEqual(g);

        result.push({
            ...g,
            input: str,
            length: str.length,
            messages: g.messages.join(", "),
        });
    });

    expect(getPasswordStrength("12F$#jj%").strength).toBe("Strong");
    console.table(result);
});
