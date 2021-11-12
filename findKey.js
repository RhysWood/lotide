const assertEqual = require('./assertEqual');

const findKey = ((obj, cb) => {
  for (const key in obj) {
    if (cb(obj[key])) {
      return key;
      break;
    }
  }
});

module.exports = findKey;