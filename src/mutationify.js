module.exports = function mutationify(object) {
  return '{'+Object.keys(object).reduce(function (result, key) {
    if (typeof object[key] === 'number') {
      result.push(`${key}: ${object[key]}`);
    } else {
      result.push(`${key}: "${object[key]}"`);
    }
    return result;
  }, []).join(', ')+'}';
};
