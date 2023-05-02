// function getPasswordStrength(password) {
//     // Define the password strength criteria and their corresponding scores
//     const criteria = [
//       {
//         pattern: /[a-z]/,
//         score: 1,
//         message: "lowercase letters"
//       },
//       {
//         pattern: /[A-Z]/,
//         score: 2,
//         message: "uppercase letters"
//       },
//       {
//         pattern: /\d/,
//         score: 2,
//         message: "digits"
//       },
//       {
//         pattern: /[\W_]/,
//         score: 3,
//         message: "special characters"
//       },
//       {
//         pattern: /.{8,}/,
//         score: 2,
//         message: "at least 8 characters long"
//       }
//     ];
  
//     // Calculate the score based on the password strength criteria
//     let score = 0;
//     let messages = [];
//     for (const {pattern, score: criterionScore, message} of criteria) {
//       if (pattern.test(password)) {
//         score += criterionScore;
//         messages.push(`Contains ${message}`);
//       } else {
//         messages.push(`Does not contain ${message}`);
//       }
//     }
  
//     // Determine the password strength based on the score
//     let strength;
//     if (score < 6) {
//       strength = "Very weak";
//     } else if (score < 9) {
//       strength = "Weak";
//     } else if (score < 12) {
//       strength = "Moderate";
//     } else if (score < 15) {
//       strength = "Strong";
//     } else {
//       strength = "Very strong";
//     }
  
//     // Return an object with the score, messages, and strength
//     return {
//       score,
//       messages,
//       strength
//     };
//   }
  
//   // Example usage:
//   const password = "MyPassw0rd!";
//   const {score, messages, strength} = getPasswordStrength(password);
//   console.log(`Score: ${score}`);
//   console.log(`Messages: ${messages.join(", ")}`);
//   console.log(`Strength: ${strength}`);