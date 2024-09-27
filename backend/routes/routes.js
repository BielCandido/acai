import express from 'express'
import { getRelatorioPedidos, getTamanhos, getTipos, postPedido, deletePedido } from "../controllers/controllers.js" 

const router = express.Router()

router.get("/tamanhos", getTamanhos)
router.get("/tipos", getTipos)
router.get("/RelatorioPedidos", getRelatorioPedidos)

router.post("/pedido", postPedido)
router.delete("/pedido/:id", deletePedido)

export default router