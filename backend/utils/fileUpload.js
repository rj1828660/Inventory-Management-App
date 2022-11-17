const multer=require("multer");

//Define file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null,Date().toISOString().replace(/:/g,"-") +file.originalname)
     }
  })
  //specify file format allow to save
  function fileFilter (req, file, cb) { 
   if(file.mimetype==="image/png"||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg" )
    cb(null, true);
   else
    cb(null, false);

 // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
   
  }
  const upload = multer({ storage: storage },fileFilter);
  module.exports={
    upload, 
  }