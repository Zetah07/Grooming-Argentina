const verifyRoles = (roles) => {
  return (req, res, next) => {
    try {
      if (!req?.rol) return res.sendStatus(401)
      const rol = roles
      if (!rol.includes(req.rol)) return res.sendStatus(401)
      next()
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}
module.exports = verifyRoles

