const assertEqual = require('./assertEqual');

const findKeyValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyValue;