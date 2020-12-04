module.exports = {
    "preset": 'ts-jest/presets/js-with-ts',
    // "preset": 'ts-jest/presets/js-with-babel',
    "roots": [
        "<rootDir>"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    // Setup Enzyme
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.js"],
    "setupFiles": [
        "<rootDir>/src/setupEnzyme.js",
        "jest-canvas-mock"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src",
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "transformIgnorePatterns": ['<rootDir>/node_modules/(?!(local-echo))']
}