const criteria = require("./criteria");

function getPasswordStrength(password, config) {
  // Generate password strength criteria based on config
  const passwordCriteria = [];
  for (const [key, value] of Object.entries(criteria)) {
    if (config[key]) {
      passwordCriteria.push(value);
    }
  }
  if (config.minLength) {
    passwordCriteria.push({
      pattern: new RegExp(`.{${config.minLength},}`),
      score: 2,
      message: `at least ${config.minLength} characters`,
    });
  }

  // Calculate the score based on the password strength criteria
  let score = 0;
  const messages = [];
  for (const { pattern, score: criterionScore, message } of passwordCriteria) {
    if (pattern.test(password)) {
      score += criterionScore;
      messages.push(`Contains ${message}`);
    } else {
      messages.push(`Does not contain ${message}`);
    }
  }

  // Determine the password strength based on the score
  let strength;
  if (score < 2) {
    strength = "Very weak";
  } else if (score < 4) {
    strength = "Weak";
  } else if (score < 6) {
    strength = "Moderate";
  } else if (score < 8) {
    strength = "Strong";
  } else {
    strength = "Very strong";
  }

  // Return an object with the score, messages, and strength
  return { score, messages, strength };
}

module.exports = getPasswordStrength;