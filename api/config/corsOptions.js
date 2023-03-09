const allowOrigins = require("./allowOrigins")
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    if (!origin || allowOrigins.indexOf(origin) !== -1) {
      console.log("true ,cors options");
      callback(null, true)
    } else {
      callback(new Error("test"))
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions