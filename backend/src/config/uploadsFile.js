const multer = require("multer");

const uploads = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 8 * 1024 * 1024, // 8MB
  },
});

module.exports = uploads;