require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_DB_URI;

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            connectionString,
            { keepAlive:true, useNewUrlParser: true, useUnifiedTopology: true },
            (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Database connected')
                }
            }
        )

    }
    connect();
};