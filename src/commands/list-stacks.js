const exec_cf_cmd = require('../util/exec-cf-cmd');
module.exports = (args = [], options) => exec_cf_cmd(['list-stacks'].concat(args), options);
