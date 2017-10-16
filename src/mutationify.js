module.exports = function mutationify(object) {
  return '{'+Object.keys(object).reduce(function (result, key) {
    if (typeof object[key] === 'number') {
      result.push(`${key}: ${object[key]}`);
    } else if (Array.isArray(object[key])) {
      result.push(`${key}: [${object[key].map(mutationify)}]`)
    } else if (typeof object[key] === 'object') {
      result.push(`${key}: ${mutationify(object[key])}`)
    } else {
      result.push(`${key}: "${object[key]}"`);
    }
    return result;
  }, []).join(', ')+'}';
};
