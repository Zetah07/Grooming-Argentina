const newsLetter = require("../../models/newsLetter")

const handleDeleteNewsLetter = async(req, res)=>{
    const  {email} = req.body
    try {
        await newsLetter.findOneAndRemove({email:email})
        return res.sendStatus(200) 
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
    
}
module.exports = handleDeleteNewsLetter