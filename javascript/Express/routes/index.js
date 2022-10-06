const express = require("express")
const router = express.Router();

// configurar uma rota da aplicação (Método GET do HTTP)
router.get('/', (req, res) => {
    console.log("Chegou uma requisição")
    res.send('OK cliente, sua requisição chegou!')
})

module.exports = router