const defaultConfig = {
  lowercase: true,
  uppercase: true,
  digits: true,
  specialChars: true,
  minLength: 8,
};

export type Config = typeof defaultConfig;
export default defaultConfig;
