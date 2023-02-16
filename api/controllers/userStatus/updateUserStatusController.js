const userStatus = require("../../models/userStatus");

//agregar validaciones del documento y de la info a actualizar
//agregar que si el cambio de status es a aproved entonces crear y vinvular el nuevo usuario
const handleUserStatusUpdate = async(req, res) => {
    const {document , updateInfo} = req.body
    const updatedUser = await userStatus.findOneAndUpdate({"document":document},updateInfo)
    
    res.status(200).json(updatedUser)
}

module.exports = handleUserStatusUpdate