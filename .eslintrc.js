import config from "./index.js";

export const DEFAULT_CONFIG = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: 'module',
    },
}

export default {
    ...DEFAULT_CONFIG,
    extends: [
        'eslint:recommended',
    ],
    ...config,
}