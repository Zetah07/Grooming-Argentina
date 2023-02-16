const userStatus = require("../../models/userStatus")

const handleUserStatus = async(req, res)=>{
    const userStatusList =  await userStatus.find({})
    res.status(200).json(userStatusList)
}

module.exports = handleUserStatus