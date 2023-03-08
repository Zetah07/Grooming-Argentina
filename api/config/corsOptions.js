const  allowOrigins = require("./allowOrigins")
console.log("cors ,cors options");
const corsOptions = {
    origin: (origin, callback) =>{
        if (!origin || allowOrigins.indexOf(origin)!== -1){
            console.log("true ,cors options");
            callback(null, true)
        }else {
            console.log("false ,cors options");
            callback(new Error("test"))
        }     
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions