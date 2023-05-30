const allowOrigins = require("../config/allowOrigins");

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  console.log("Origin: ", origin);
  if (allowOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
  }
  next();
};

module.exports = credentials;
