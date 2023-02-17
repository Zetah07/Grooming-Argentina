const newsLetter = require("../../models/newsLetter")

const handleReadNewsLetter = async(req, res)=>{
    try {
        const allSuscribers = await newsLetter.find({})
        return res.status(200).json(allSuscribers)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
module.exports = handleReadNewsLetter