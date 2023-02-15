const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500
const cors = require("cors");
const morgan = require('morgan');
const corsOptions = require("./config/corsOptions");
const initDB = require('./config/db');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");

initDB();

//fixing credentials errors blocking cookies from cross-site
app.use(credentials)
//Cross Origin Resource Service
app.use(cors(corsOptions));

app.use(cookieParser())

app.use(morgan("dev"));

app.use(express.urlencoded({extended :false}));

app.use(express.json());

app.use('/', require("./routes/MainRouter"))

mongoose.connection.once("open", () => {
  console.log("Connected to database")
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})


