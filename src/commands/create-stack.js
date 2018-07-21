const exec_cf_cmd = require('../util/exec-cf-cmd');
module.exports = (args = [], options = {}) => {
  return exec_cf_cmd(['create-stack'].concat(args), options);
}
