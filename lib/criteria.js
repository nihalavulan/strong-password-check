module.exports = [
    {
      pattern: /[a-z]/,
      score: 1,
      message: "lowercase letters"
    },
    {
      pattern: /[A-Z]/,
      score: 2,
      message: "uppercase letters"
    },
    {
      pattern: /\d/,
      score: 2,
      message: "digits"
    },
    {
      pattern: /[\W_]/,
      score: 3,
      message: "special characters"
    },
    {
      pattern: /.{8,}/,
      score: 2,
      message: "at least 8 characters long"
    }
  ];