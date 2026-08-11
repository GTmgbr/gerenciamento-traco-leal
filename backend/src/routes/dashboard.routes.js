const express = require("express");

const router = express.Router();

const DashboardController =
require("../controllers/DashboardController");

router.get(
"/resumo",
DashboardController.resumo
);

router.get(
"/atividades",
DashboardController.atividades
);

module.exports = router;
