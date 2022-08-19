const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    collectCoverageFrom: [
        '**/**/*.{js,tsx,ts}',
        '!**/{.next,coverage}/**',
        '!**/_app.tsx',
        '!jest.config.js',
        '!next.config.js',
    ],
    testEnvironment: 'jest-environment-jsdom',
    verbose: true
    // TODO: come back to this at some point
    // coverageThreshold: {
    //     global: {
    //         statements: 100,
    //         branches: 100,
    //         functions: 100,
    //         lines: 100
    //     }
    // }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
