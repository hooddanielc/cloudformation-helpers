
// commands
const create_stack = require('./src/commands/create-stack');
const delete_stack = require('./src/commands/delete-stack');
const deploy = require('./src/commands/deploy');
const get_template_summary = require('./src/commands/get-template-summary');
const get_template = require('./src/commands/get-template');
const list_stacks = require('./src/commands/list-stacks');
const update_stack = require('./src/commands/update-stack');

// helpers
const apply_change_set = require('./src/helpers/apply-change-set');
const apply_template = require('./src/helpers/apply-template');

// util
const dasherize = require('./src/util/dasherize');
const exec = require('./src/util/exec');
const exec_cf_cmd = require('./src/util/exec-cf-cmd');
const prettyprint = require('./src/util/prettyprint');

module.exports = {
  commands: {
    create_stack,
    delete_stack,
    deploy,
    get_template_summary,
    get_template,
    list_stacks,
    update_stack
  },
  helpers: {
    apply_change_set,
    apply_template
  },
  utils: {
    dasherize,
    exec_cf_cmd,
    exec,
    prettyprint
  }
};
