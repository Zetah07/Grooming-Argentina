const  allowOrigins = require("./allowOrigins")
const corsOptions = {
    origin: (origin, callback) =>{
        if (!origin || allowOrigins.indexOf(origin)!== -1){
            callback(null, true)
        }else {
            callback(new Error("test"))
        }     
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions