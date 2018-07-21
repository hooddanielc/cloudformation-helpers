const process = require('process');
const list_stacks = require('../../src/commands/list-stacks');
list_stacks().then(() => {
  console.log('success');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
