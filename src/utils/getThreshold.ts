import { Config } from "../constants/defaultConfig";

const getThreshold = (config: Config) => {
  const threshold =
    Object.values(config).filter((value) => value === true).length + 1 || 5;

  return threshold;
};

export default getThreshold;
