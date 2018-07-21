const process = require('process');
const path = require('path');
const apply_template = require('../../src/helpers/apply-template');
const parameters = JSON.stringify([{
  ParameterKey: 'AlarmEMail',
  ParameterValue: 'hooddanielc@gmail.com'
}]);
const file_path = path.resolve(__dirname, '..', 'fixtures', 'sqs-with-cloudwatch-alarms.template');
apply_template(file_path, parameters).then((result) => {
  console.log('sucess');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
