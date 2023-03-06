const userStatus = require("../../models/userStatus");
const handleUpdateUserStatusInfo = async(req, res)=>{
    const trueUser = req.user
    const updateInfo = req.body
    console.log(updateInfo);
    try {
        const  updatedUser = await userStatus.findOneAndUpdate({document:trueUser},updateInfo)
        if(updatedUser){
            return res.status(200).json(updatedUser)
        }else{
            return res.status(400).json({message:"usuario no actualizado"})
        }
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
module.exports = handleUpdateUserStatusInfo