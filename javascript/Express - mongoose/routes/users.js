var express = require("express");
const User = require("../models/User");
var router = express.Router();

const isAuthorized = require('../middleware/isAuthorized')

// Obter todos os usuários
router.get("/", isAuthorized, async (req, res, next) => {
  const users = await User.find();
  res.json(users);
});

// Obtrer um usuário pelo ID
router.get("/:id", isAuthorized, async (req, res, next) => {
  const { id: _id } = req.params;
  const user = await User.findById(_id);
  return user ? res.json(user) : res.sendStatus(404);
});

//Cadastro de usuário
router.post("/", async (req, res, next) => {
  const json = req.body;

  if ((await User.countDocuments({ login: json.login })) == 0) {
    const user = new User(json);
    const hasErrors = user.validateSync();

    return hasErrors
      ? res.status(400).json(hasErrors)
      : res.json(await user.save());
  } else {
    res.status(400).json({ message: "Login existente" });
  }
});

//Cadastro de usuário
router.put("/:id", isAuthorized, async (req, res, next) => {
  const json = req.body;
  json.updatedAt = new Date()
  const { id: _id } = req.params;
  const user = await User.findById(_id);

  if (user) {

    if(user.login !== req.login) {
      return res.status(403).json({message: "Sem permissão"})
    }

    const hasErrors = new User(json).validateSync();

    if (hasErrors) {
      res.status(400).json(hasErrors);
    } else {
      // await User.updateOne({ _id }, json);
      // res.json({...json, _id});
      const updatedUser = await User.findOneAndUpdate({ _id }, json, {new: true});
      // console.log(updatedUser)
      if(updatedUser) return res.json(updatedUser)
    }
  } else {
    res.status(404).json({ message: "Usuário inexistente" });
  }
});

//Cadastro de usuário
router.delete("/:id", 
// isAuthorized, 
async (req, res, next) => {
  const { id: _id } = req.params;

  const result = await User.deleteOne({ _id, login:req.login})
  if (result.deletedCount > 0) {
    return res.send()
  } else {
    res.status(404).send()
  }
});

module.exports = router;
