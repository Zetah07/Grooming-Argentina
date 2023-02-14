const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500
const cors = require("cors")
const morgan = require('morgan');
const corsOptions = require("./config/corsOptions")
const initDB = require('./config/db')
const mongoose = require("mongoose")


initDB();
//Cross Origin Resource Service
app.use(cors(corsOptions));

app.use(morgan("dev"));

app.use('/', require("./routes/MainRouter"))

mongoose.connection.once("open", () => {
  console.log("Connected to database")
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})


