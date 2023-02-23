const verifyRoles = (roles)=>{
    return (req, res ,next)=>{
        if (!req?.rol)return res.sendStatus(401)
        const rol = roles
        console.log(rol);
        console.log(req.rol);
        if (rol !== req.rol) return res.sendStatus(401)
        next()
    }
}
module.exports = verifyRoles