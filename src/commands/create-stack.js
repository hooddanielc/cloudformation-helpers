const exec_cf_cmd = require('../util/exec-cf-cmd');
module.exports = (args = [], options = {}) => {
  let parameters = typeof options.parameters === 'object' ? JSON.stringify(parameters) : options.parameters;
  return exec_cf_cmd(['create-stack'].concat(args), {...options, parameters});
}
