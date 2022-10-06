var express = require("express");
const User = require("../models/User");
var router = express.Router();

const jwt = require('jsonwebtoken')

const EXPIRES = Number(process.env.JWT_TIMEOUT) //Tempo do token

function generateToken( params = {}, timeout = EXPIRES) {
    return jwt.sign(params, process.env.JWT_SECRET_KEY, {
        expiresIn: timeout
    })
}

//gera token
router.post("/", async (req, res, next) => {
    const {login, password} = req.body;
  
    const user = await User.findOne({login, password})

    if (user){
        return res.json({token: generateToken({login})})
    }else{
        return res.status(400).json({message: "Usuário e/ou senha inválidos!"})
    }
});

module.exports = router;
