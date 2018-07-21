const exec_cf_cmd = require('../util/exec-cf-cmd');
module.exports = (args = [], options = {}) => {
  return exec_cf_cmd(['update-stack'].concat(args), options);
}
