import getPasswordStrength from "../index";

test("Is Working Correctly", () => {
    const g = getPasswordStrength("superstrictpassword");
    console.log("@Result => ", g);
    expect(getPasswordStrength("superstrictpassword")).toStrictEqual(g);
});
