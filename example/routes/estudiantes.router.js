const estudiantesController = require("../controllers/estudiantes.controller")
const express = require("express")
const router = express.Router()


router.post("/",estudiantesController.create)
router.get("/find",estudiantesController.find)

module.exports = router