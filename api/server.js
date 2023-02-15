const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const corsOptions = require("./config/corsOptions");
const initDB = require('./config/db');
const mongoose = require("mongoose");


initDB();
//Cross Origin Resource Service
app.use(cors(corsOptions));
// for parsing json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan("dev"));

app.use('/', require("./routes/MainRouter"))
app.use('/register', require("./routes/src/register"))
app.use('/auth', require("./routes/src/auth"))

mongoose.connection.once("open", () => {
  console.log("Connected to database")
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})


