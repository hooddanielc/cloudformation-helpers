const exec = require('./exec');
const prettyprint = require('./prettyprint');
const dasherize = require('./dasherize');

const format_options = (options) => {
  const append_args = [];
  Object.keys(options).forEach((k) => {
    append_args.push(`--${dasherize(k)}`),
    append_args.push(options[k]);
  });
  return append_args;
}

module.exports = async (args = [], options = {}) => {
  const formatted_options = format_options(options);
  const result = await exec('aws', ['cloudformation'].concat(args).concat(formatted_options));
  const {code, stdout, stderr} = result;
  const out = stdout || stderr || '';
  if (code !== 0) {
    return Promise.reject(new Error(`exit code ${code}, output: ${out || 'empty output'}`));
  }
  try {
    return Promise.resolve(JSON.parse(out || '{}'));
  } catch (err) {
    return Promise.reject(result);
  }
}
