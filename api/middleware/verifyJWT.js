const jwt = require("jsonwebtoken")
require("dotenv").config()

const veryfyJWT = (req, res, next) =>{
     const authHeader = req.headers["authorization"]
     console.log(authHeader)
     if (!authHeader) return res.sendStatus(401)
     const token = authHeader.split(" ")[1]
     console.log(token, "token")
     jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) =>{
            if (err) return res.sendStatus(403);
            req.user = decoded.username;
            next();
        }
     )
}

module.exports = veryfyJWT;