import defaultConfig from "./constants/defaultConfig";
import criteria, { Criteria } from "./criteria";
import getThreshold from "./utils/getThreshold";

function getPasswordStrength(password: string, config = defaultConfig) {
    // Generate password strength criteria based on config
    const passwordCriteria = [];
    for (const [_, value] of Object.entries(criteria)) {
        const key = _ as Criteria;
        if (config[key]) {
            passwordCriteria.push(value);
        }
    }
    // Add a minimum length check if one is set
    if (config.minLength) {
        passwordCriteria.push({
            pattern: new RegExp(`.{${config.minLength},}`),
            score: 1,
            message: `Contains at least ${config.minLength} characters`,
        });
    }

    // Calculate the score based on the password strength criteria
    let score = 0;
    const messages = [];
    for (const { pattern, score: criterionScore, message } of passwordCriteria) {
        if (pattern.test(password)) {
            score += criterionScore;
        } else {
            messages.push(`Does not contain ${message}`);
        }
    }

    // Determine the password strength based on the score
    const threshold = getThreshold(config);
    let strength;
    if (score >= threshold) {
        strength = "Strong";
    } else if (score >= threshold / 2) {
        strength = "Moderate";
    } else {
        strength = "Weak";
    }

    // Return an object with the messages, and strength
    return { messages, strength };
}

export default getPasswordStrength;
