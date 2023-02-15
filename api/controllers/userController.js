const userModel = require('../models/user');

const getUsers = async (req, res) => {
    userModel.find({}, (err, docs) => {
        res.send({
            docs
        })
    })
};

const postUser = (req, res) => {
    const data = req.body;
    userModel.create(data, (err, docs) => {
        if(err) {
            console.log('Error', err)
        }
        res.send({data: docs})
    })
};

module.exports = {
    getUsers,
    postUser
}