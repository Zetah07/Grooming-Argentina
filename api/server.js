const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500
const cors = require("cors")
const morgan = require('morgan');
const corsOptions = require("./config/corsOptions")
const initDB = require('./config/db')

//Cross Origin Resource Service
app.use(cors(corsOptions));

app.use(morgan("dev"));

app.use('/', require("./routes/MainRouter"))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

initDB();