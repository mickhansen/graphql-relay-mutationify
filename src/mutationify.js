const isPlainObject = require('lodash.isplainobject');

module.exports = function mutationify(object) {
  if (isPlainObject(object)) {
    return '{'+Object.keys(object).reduce(function (result, key) {
      result.push(`${key}: ${mutationify(object[key])}`);
      return result;
    }, []).join(', ')+'}';
  } else if (Array.isArray(object)){
    return `[${object.map(mutationify).join(', ')}]`;
  } else if (typeof object === 'number') {
    return object;
  } else {
    return `"${object}"`
  }
};
