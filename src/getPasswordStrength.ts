import { defaultConfig, criteria } from "./constants";
import getThreshold from "./utils/getThreshold";

import type { DefaultConfig, Result } from "./types";

function getPasswordStrength(password: string, config = defaultConfig): Result {
    // Generate password strength criteria based on config
    const passwordCriteria = Object.entries(criteria)
        .filter(([key]) => (config as DefaultConfig)[key]) // Type assertion here
        .map(([, value]) => value);

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
    const strength =
        score >= threshold ? "Strong" : score >= threshold / 2 ? "Moderate" : "Weak";

    return { messages, strength };
}

export default getPasswordStrength;
