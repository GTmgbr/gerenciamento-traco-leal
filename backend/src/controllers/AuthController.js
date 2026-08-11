const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthService = require("../services/AuthService");

class AuthController {

    async login(req, res) {

        try {

            const { email, senha } = req.body;

            const usuario = await AuthService.buscarPorEmail(email);

            if (!usuario) {

                return res.status(401).json({
                    erro: "E-mail ou senha inválidos."
                });

            }

            const senhaCorreta = await bcrypt.compare(
                senha,
                usuario.senha
            );

            if (!senhaCorreta) {

                return res.status(401).json({
                    erro: "E-mail ou senha inválidos."
                });

            }

            const token = jwt.sign(

                {
                    id: usuario.id,
                    perfil: usuario.perfil
                },

                process.env.JWT_SECRET,

                {
                    expiresIn: "8h"
                }

            );

            return res.json({

                usuario: {

                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    perfil: usuario.perfil

                },

                token

            });

        } catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao realizar login."

            });

        }

    }

}

module.exports = new AuthController();