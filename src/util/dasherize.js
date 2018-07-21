module.exports = (name = '') => {
  let result = '';
  for (let i = 0; i < name.length; ++i) {
    if (name[i].match(/[A-Z]/)) {
      result += `-${name[i].toLowerCase()}`;
    } else {
      result += name[i];
    }
  }
  return result;
}
