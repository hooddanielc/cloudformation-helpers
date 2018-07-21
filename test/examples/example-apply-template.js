const process = require('process');
const path = require('path');
const apply_template = require('../../src/helpers/apply-template');
const get_args = require('./get-args');
const file_path = path.resolve(__dirname, '..', 'fixtures', 'sqs-with-cloudwatch-alarms.template');

try {
  const args = get_args();

  apply_template(args.template, {capabilities: 'CAPABILITY_NAMED_IAM'}).then((result) => {
    console.log('sucess');
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
