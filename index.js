var toml = require('toml');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var value = toml.parse(source);
  this.value = [value];
  return JSON.stringify(value);
};
