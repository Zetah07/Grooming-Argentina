const user = require("../../models/user");
const handelReadUsersById = async (req, res)=>{
    const username = req.user
    try {
       const userFound = await user.findOne({username:username})
       delete userFound.password
       delete userFound.refreshToken
       delete userFound.resetPasswordExpires
       delete userFound.resetPasswordToken
       return res.status(200).json(userFound)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

module.exports = handelReadUsersById