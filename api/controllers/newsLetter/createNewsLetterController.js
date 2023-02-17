const newsLetter = require("../../models/newsLetter")
const regexEmail = (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const handleCreateNewsLetter = async(req, res)=>{
    const {fullName,email} = req.body
    if(!email  || !fullName) return res.status(400).json({message:"Los campos estan imcompletos"})
    if(!regexEmail.test(email)) return res.status(400).json({message:"el email es invalido"})
    try {
        const duplicate = await newsLetter.findOne({email:email})
        if (duplicate)return res.status(400).json({message:"Este email ya esta registrado"})
        const newSuscriber = await new newsLetter({fullName,email})
        await newSuscriber.save();
        return res.status(200).json(newSuscriber)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
module.exports = handleCreateNewsLetter