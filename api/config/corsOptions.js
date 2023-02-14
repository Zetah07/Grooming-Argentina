const  whitelist = ["http://localhost:3500"]
const corsOptions = {
    origin: (origin, callback) =>{
        if (!origin || whitelist.indexOf(origin)!== -1){
            callback(null, true)
        }else {
            callback(new Error("Not allawoed by CORS"))
        }     
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions