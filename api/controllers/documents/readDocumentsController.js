const handleReadDocuments = (req, res) => {
  const { CV, adjDocument } = req.body;
  let path;
  if (CV) {
    path = __dirname + "/../../files/CVs/" + CV + ".pdf" 
  } else if (adjDocument) {
    path = __dirname + "/../../files/copyDocument/" + adjDocument + ".pdf"
  }else{
    return res.status(400).send("Debe proporcionar numero de documento")
  }
  return res.download(path, {}, function (error) {
    if (error) {
      res.status(400).json({message: "documento no encontrado o no disponible"});
    }
  });
};
module.exports = handleReadDocuments;
