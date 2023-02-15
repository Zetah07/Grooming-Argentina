const allowOrigins = require("../config/allowOrigins")

const credentials = (req,res,next)=>{
    const origin = req.headers.origin
    if ( allowOrigins.includes(origin)){
        res.headers("Access-Control-Allow-Credentials", true)
    }
    next();
}

module.exports = credentials