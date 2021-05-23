const IncomingForm = require("formidable").IncomingForm;
fs = require('fs')
const fileUpload = require('express-fileupload');

module.exports = function upload(req, res) {
  if (req.files){
    const file = req.files.file;
    const fileName = file.name;

    file.mv('./data/'+fileName, function (err){
      res.send({message: "error"}).status(500);
    })
  }
};
