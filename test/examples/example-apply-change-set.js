const process = require('process');
const path = require('path');
const apply_change_set = require('../../src/helpers/apply-change-set');
const get_args = require('./get-args');
try {
  const args = get_args();

  apply_change_set(args.template).then((result) => {
    console.log('the result is ', result);
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
