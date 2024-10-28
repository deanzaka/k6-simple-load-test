const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const filePath = path.resolve(__dirname, '../dist/load-test.js');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// Replace environment variable references with actual values
fileContent = fileContent
  .replace(/process\.env\.API_URL/g, `"${process.env.API_URL}"`)
  .replace(/process\.env\.BEARER_TOKEN/g, `"${process.env.BEARER_TOKEN}"`);

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log(`Embedded environment variables in ${filePath}`);