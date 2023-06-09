const defaultConfig = require("./constants/defaultConfig");
const criteria = require("./criteria");
const getThreshold = require("./utils/getThreshold");

function getPasswordStrength(password, config = defaultConfig) {
  // Generate password strength criteria based on config
  const passwordCriteria = Object.entries(criteria)
    .filter(([key]) => config[key])
    .map(([, value]) => value);

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
  const strength = score >= threshold ? "Strong" : score >= threshold / 2 ? "Moderate" : "Weak";

  // Return an object with the messages and strength
  return { messages, strength };
}

module.exports = getPasswordStrength;
