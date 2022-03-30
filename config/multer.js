const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, path.join(__dirname, '../static/img'));
    },
    filename: function(req, file, cb) {
        cb(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
});

module.exports = storage;