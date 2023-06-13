import { DefaultConfig } from "../types";

const getThreshold = (config: DefaultConfig) => {
    const threshold =
        Object.values(config).filter((value) => value === true).length + 1 || 5;

    return threshold;
};

export default getThreshold;
