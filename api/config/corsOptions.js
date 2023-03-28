const allowOrigins = require('./allowOrigins');
console.log('cors ,cors options');
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('test'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
