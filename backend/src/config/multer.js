const multer = require("multer");

const path = require("path");

const crypto = require("crypto");

const storage = multer.diskStorage({

    destination(req, file, callback) {

        callback(

            null,

            path.resolve(__dirname, "../../uploads/clientes")

        );

    },

    filename(req, file, callback) {

        const hash = crypto.randomBytes(8).toString("hex");

        const nome = `${hash}-${Date.now()}${path.extname(file.originalname)}`;

        callback(

            null,

            nome

        );

    }

});

module.exports = multer({

    storage,

    fileFilter(req, file, callback) {

        const permitidos = [

            "image/jpeg",

            "image/png",

            "image/webp"

        ];

        if (

            permitidos.includes(file.mimetype)

        ) {

            callback(null, true);

        }

        else {

            callback(

                new Error("Formato inválido.")

            );

        }

    },

    limits: {

        fileSize: 5 * 1024 * 1024

    }

});