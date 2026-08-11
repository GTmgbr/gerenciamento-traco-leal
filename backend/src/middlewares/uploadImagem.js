const multer = require("multer");

const crypto = require("crypto");

const path = require("path");

module.exports = multer({

    storage: multer.diskStorage({

        destination(req, file, cb) {

            cb(null, "uploads/imagens");

        },

        filename(req, file, cb) {

            cb(

                null,

                crypto.randomBytes(8).toString("hex") +

                "-" +

                Date.now() +

                path.extname(file.originalname)

            );

        }

    })

});