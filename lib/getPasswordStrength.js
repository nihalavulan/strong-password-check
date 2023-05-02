const criteria = require("./criteria");

function getPasswordStrength(password) {

  // Calculate the score based on the password strength criteria
  let score = 0;
  let messages = [];

  for (const {pattern, score: criterionScore, message} of criteria) {
    if (pattern.test(password)) {
      score += criterionScore;
      messages.push(`Contains ${message}`);
    } else {
      messages.push(`Does not contain ${message}`);
    }
  }

  // Determine the password strength based on the score
  let strength;
  if (score < 6) {
    strength = "Very weak";
  } else if (score < 9) {
    strength = "Weak";
  } else if (score < 12) {
    strength = "Moderate";
  } else if (score < 15) {
    strength = "Strong";
  } else {
    strength = "Very strong";
  }

  // Return an object with the score, messages, and strength
  return {
    score,
    messages,
    strength
  };
}

module.exports = getPasswordStrength;