//const exec_cf_cmd = require('../util/exec-cf-cmd');
const path = require('path');
const fs = require('fs');
const list_stacks = require('../commands/list-stacks');
const create_stack = require('../commands/create-stack');
const get_template = require('../commands/get-template');
const update_stack = require('../commands/update-stack');
const get_template_summary = require('../commands/get-template-summary');
const deploy = require('../commands/deploy');

get_stack_name_from_path = (file_path) => path.basename(file_path).split('.')[0];

module.exports = async (file_path, name = get_stack_name_from_path(file_path), options = {}) => {
  if (!fs.existsSync(file_path)) return Promise.reject(new Error(`${file_path} does not exist`));
  return deploy([], {templateFile: file_path, stackName: name, ...options});
}
