const jwt = require("jsonwebtoken");

function auth(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({
            erro: "Token não informado."
        });

    }

    const [, token] = authHeader.split(" ");

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.usuario = decoded;

        next();

    } catch {

        return res.status(401).json({
            erro: "Token inválido."
        });

    }

}

module.exports = auth;