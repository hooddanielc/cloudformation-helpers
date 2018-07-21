const {expect} = require('chai');
const require_default = require('../');

describe('', () => {
  const parent_keys = [
    'commands',
    'helpers',
    'utils'
  ];

  const command_keys = [
    'create_stack',
    'delete_stack',
    'deploy',
    'get_template_summary',
    'get_template',
    'list_stacks',
    'update_stack'
  ];

  const util_keys = [
    'dasherize',
    'exec_cf_cmd',
    'exec',
    'prettyprint'
  ];

  const helper_keys = [
    'apply_change_set',
    'apply_template'
  ];

  it('exports default object', () => {
    expect(require_default).to.be.a('object');
    expect(Object.keys(require_default)).to.eql(parent_keys);
    expect(Object.keys(require_default.helpers)).to.eql(helper_keys);
    expect(Object.keys(require_default.commands)).to.eql(command_keys);
    expect(Object.keys(require_default.utils)).to.eql(util_keys);
  });

  it('exports commands as functions', () => {
    Object.keys(require_default.commands).forEach((k) => {
      expect(require_default.commands[k]).to.be.a('function');
    });
  })

  it('exports helpers as functions', () => {
    Object.keys(require_default.helpers).forEach((k) => {
      expect(require_default.helpers[k]).to.be.a('function');
    });
  });

  it('exports utils as functions', () => {
    Object.keys(require_default.utils).forEach((k) => {
      expect(require_default.utils[k]).to.be.a('function');
    });
  });
});
