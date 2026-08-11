const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({

    destination(req, file, cb) {

        cb(null, "uploads/arquivos-pecas");

    },

    filename(req, file, cb) {

        const hash =
            crypto.randomBytes(8).toString("hex");

        const nome =
            hash +
            "-" +
            Date.now() +
            path.extname(file.originalname);

        cb(null, nome);

    }

});

module.exports = multer({

    storage,

    limits: {

        fileSize: 50 * 1024 * 1024

    }

});