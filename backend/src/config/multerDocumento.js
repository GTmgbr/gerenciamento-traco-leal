const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({

    destination(req, file, cb) {

        cb(null, "uploads/documentos");

    },

    filename(req, file, cb) {

        const hash = crypto.randomBytes(8).toString("hex");

        cb(

            null,

            `${hash}-${Date.now()}${path.extname(file.originalname)}`

        );

    }

});

module.exports = multer({

    storage,

    fileFilter(req, file, cb) {

        if (file.mimetype !== "application/pdf") {

            return cb(new Error("Arquivo inválido."));

        }

        cb(null, true);

    }

});