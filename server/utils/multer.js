const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    console.log('Uploaded file extension:', ext);
    console.log('Uploaded MIME type:', file.mimetype);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".jfif") {
      cb(new Error("File type is not supported. Allowed types: .jpg, .jpeg, .png, .jfif"), false);
      return;
    }
    cb(null, true);
  }
});
