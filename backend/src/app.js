const path = require("path");
const express = require("express");
const cors = require("cors");

const clienteRoutes = require("./routes/cliente.routes");
const authRoutes = require("./routes/auth.routes");
const documentoRoutes = require("./routes/documento.routes");
const categoriaRoutes = require("./routes/categoria.routes");
const pecaRoutes = require("./routes/peca.routes");
const imagemRoutes = require("./routes/imagem.routes");
const linkPecaRoutes = require("./routes/linkPeca.routes");
const arquivoPecaRoutes = require("./routes/arquivoPeca.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/uploads",
    express.static(
        path.resolve(__dirname, "../uploads")
    )
);

app.get("/", (req, res) => {

    res.json({
        mensagem: "API do Portfólio Traço Leal funcionando!"
    });

});

app.use("/api/clientes", clienteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/documentos", documentoRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/pecas", pecaRoutes);
app.use("/api", imagemRoutes);
app.use("/api", linkPecaRoutes);
app.use("/api", arquivoPecaRoutes);
app.use("/api/dashboard", dashboardRoutes);

module.exports = app;