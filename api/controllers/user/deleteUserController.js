const users = require("../../models/user");

const handleDeleteUser = async(req, res)=>{
    const {user} = req.body
    if (!user) return res.status(400).json({message: `Debe proporcionar un usuario`})
    try {
        const userToDelete =  await users.findOneAndRemove({username: user})
        return res.status(200).json({message: `Se ha borrado el usuario ${user}`})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

module.exports = handleDeleteUser