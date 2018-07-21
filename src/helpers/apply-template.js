//const exec_cf_cmd = require('../util/exec-cf-cmd');
const path = require('path');
const fs = require('fs');
const list_stacks = require('../commands/list-stacks');
const create_stack = require('../commands/create-stack');
const get_template = require('../commands/get-template');
const update_stack = require('../commands/update-stack');
const get_template_summary = require('../commands/get-template-summary');

get_stack_name_from_path = (file_path) => path.basename(file_path).split('.')[0];

const is_obj_equal = (a, b) => {
  // Create arrays of property names
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    console.log(a);
    console.log('============');
    console.log(b);
    console.log('difference props lengths', aProps.length, bProps.length);
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];

    if (typeof a[propName] === 'object' || typeof b[propName] === 'object') {
      if (!is_obj_equal(a[propName], b[propName])) {
        console.log('NOT EQUAL?', propName);
        return false;
      }
    } else if (a[propName] !== b[propName]) {
      console.log('NOT EQUAL?', `${a[propName]} ${b[propName]}`);
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

module.exports = async (file_path, options = {}, name = get_stack_name_from_path(file_path)) => {
  if (!fs.existsSync(file_path)) return Promise.reject(new Error(`${file_path} does not exist`));
  const list = await list_stacks();
  const stack_name_map = {}
  list.StackSummaries.forEach((stack) => stack_name_map[stack.StackName] = stack);
  
  if (stack_name_map[name] && stack_name_map[name].StackStatus !== 'DELETE_COMPLETE') {
    // update
    const current_template = await get_template([], {stackName: name});
    const current_template_body = current_template.TemplateBody;
    const new_template_body = JSON.parse(fs.readFileSync(file_path, 'utf8'));
    const current_template_summary = await get_template_summary([], {stackName: name});

    if (!is_obj_equal(current_template_body, new_template_body)) {
      console.log('template out of sync', 'updating');
      return update_stack([], {
        stackName: name,
        templateBody: fs.readFileSync(file_path, 'utf8'),
        ...options
      });
      console.log('template updated');
    } else {
      console.log('template body up to date', 'nothing to do');
      return current_template_body;
    }
  } else {
    console.log('the stack does not exist', 'create');
    const created = await create_stack([], {
      stackName: name,
      templateBody: fs.readFileSync(file_path, 'utf8'),
      ...options
    });
  }
  return 'ok';
}
