const multer = require("multer");
const path = require("path");

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.resolve("src", "public", "productsImages");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    const imageName = Date.now() + "_" + file.originalname;
    callback(null, imageName);
  },
});

const uploadImage = multer({ storage: multerDiskStorage });

module.exports = uploadImage
