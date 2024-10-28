# k6 Simple Load Testing

This project is designed to load test APIs using k6, with environment variables managed through a `.env` file.

## Project Structure

```
├── src/
│   ├── load-test.ts        # Main k6 script in TypeScript
│   ├── embed-env.ts        # Script to embed environment variables into JS file
├── dist/                   # Compiled JavaScript files
├── .env                    # Environment variables file (not included in Git)
├── .env.example            # Example environment variables file
├── .gitignore              # Files and folders to ignore in Git
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Yarn](https://yarnpkg.com/) installed
- [k6](https://k6.io/) installed

### Installation

1. Clone this repository:
```bash
git clone <your-repository-url>
cd k6-load-testing
```
2.	Install dependencies:
```
yarn install
```
3.	Create a .env file in the root directory based on .env.example:
```
cp .env.example .env
```
Fill in the required environment variables.

## Usage

Build and run the load test script:
```
yarn load-test
```