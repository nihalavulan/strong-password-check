"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getThreshold = (config) => {
    const threshold = Object.values(config).filter((value) => value === true).length + 1 || 5;
    return threshold;
};
exports.default = getThreshold;
