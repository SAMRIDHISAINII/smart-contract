const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const sourceCode = fs.readFileSync(inboxPath, 'utf8');

// Here we get out interface and bytecode 👇
module.exports = solc.compile(sourceCode, 1).contracts[':Inbox'];
