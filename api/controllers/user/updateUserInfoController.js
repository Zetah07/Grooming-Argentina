const user = require("../../models/user");
const bcrypt = require("bcrypt");

const handleUpdateUserInfo = async(req, res)=>{
    const trueUser = req.user
    const {email, password} = req.body
    try {
        if(email && password){
            const hashedPassword = await bcrypt.hash(password, 10);
            const saved = await user.findOneAndUpdate({username: trueUser}, {email:email, password: hashedPassword})
            if (saved){
                return res.status(200).json(saved)
            }else{
                return res.status(400).json({message: "usuario no actualizado"})
            }
        }else if(email){
            const saved = await user.findOneAndUpdate({username: trueUser}, {email:email})
            if (saved){
                return res.status(200).json(saved)
            }else{
                return res.status(400).json({message: "usuario no actualizado"})
            }
        }else if(password){
            const hashedPassword = await bcrypt.hash(password, 10);
            const saved = await user.findOneAndUpdate({username: trueUser},{password: hashedPassword})
            if (saved){
                return res.status(200).json(saved)
            }else{
                return res.status(400).json({message: "usuario no actualizado"})
            }
        }
        return res.sendStatus(400)
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
        
    }

module.exports = handleUpdateUserInfo