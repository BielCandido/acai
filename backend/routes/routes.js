import express from 'express'
import { getComplementos, getTamanhos, getTipos, postPedido } from "../controllers/controllers.js" 

const router = express.Router()

router.get("/tamanhos", getTamanhos)
router.get("/tipos", getTipos)
router.get("/complementos", getComplementos)

router.post("/pedido", postPedido)

export default router