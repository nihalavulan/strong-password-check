export default function generateRandomPassword(length = 6) {
    if (length <= 2) length = 4;

    let include = false;
    let result = "";

    for (let i = 0; i < length / 2; i++) {
        result += getAlphabet();

        if (include) {
            result += getAlphabet("uppercase");
            result += getAlphabet("symbol");
            include = false;
        }

        result += getAlphabet("number");
        if (i % 2 === 0) include = true;
    }

    return result;
}

function getAlphabet(
    value: "uppercase" | "lowercase" | "number" | "symbol" = "lowercase"
) {
    switch (value) {
        case "lowercase":
            // lowercase 97 - 122 charcode
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

        case "uppercase":
            // uppercase 65 - 90 charcode
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        case "number":
            // numbers 48 - 57 charcode
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

        case "symbol":
            // symbols 33 - 47, 58 - 64, 91 - 96, 123 - 126 charcode
            return String.fromCharCode(Math.floor(Math.random() * 16) + 33);
    }
}
