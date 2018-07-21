const process = require('process');
const path = require('path');
const apply_change_set = require('../../src/helpers/apply-change-set');
const file_path = path.resolve(__dirname, '..', 'fixtures', 'sqs-with-cloudwatch-alarms.template');

apply_change_set(file_path).then((result) => {
  console.log('the result is ', result);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
