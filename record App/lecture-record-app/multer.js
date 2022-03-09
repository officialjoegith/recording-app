const multer = require('multer');


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/recordings");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${req.params.id}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

module.exports = { upload };