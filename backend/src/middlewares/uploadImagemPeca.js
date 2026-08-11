const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({

    destination(req, file, cb) {

        cb(null, "uploads/imagens");

    },

    filename(req, file, cb) {

        const hash = crypto.randomBytes(8).toString("hex");

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

    fileFilter(req, file, cb) {

        const permitidos = [

            "image/png",

            "image/jpeg",

            "image/jpg",

            "image/webp"

        ];

        if (!permitidos.includes(file.mimetype)) {

            return cb(

                new Error("Formato de imagem inválido.")

            );

        }

        cb(null, true);

    },

    limits: {

        fileSize: 10 * 1024 * 1024

    }

});