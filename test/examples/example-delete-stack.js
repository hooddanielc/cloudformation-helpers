const process = require('process');
const delete_stack = require('../../src/commands/delete-stack');
delete_stack([], {stackName: 'sqs-with-cloudwatch-alarms'}).then(() => {
  console.log('success');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
