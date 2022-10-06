const express = require("express")
const router = express.Router();

const pessoas = [
    {id: new Date().getTime(), nome: 'Fulano', 'CPF': '1234'},
    {id: new Date().getTime(), nome: 'Beltrano', 'CPF': '1234'},
    {id: new Date().getTime(), nome: 'Ciclano', 'CPF': '1234'},
    {id: 1663873010923, nome: 'Alfredo', 'CPF': '1234'},
]

router.get('/', (req, res) => {
    res.json(pessoas)
})

router.post('/', (req, res) => {
    const pessoa = req.body;
    pessoa.id = new Date().getTime();
    // console.log(pessoa);
    pessoas.push(pessoa)
    res.json(pessoa);
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const pessoa = req.body;
    // console.log([pessoa, id, pessoas]);
    const index = pessoas.findIndex((p) => p.id == id)
    // console.log(index)
    pessoas[index].nome = pessoa.nome;
    pessoas[index].CPF = pessoa.CPF;
    res.json(pessoas[index]);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = pessoas.findIndex((p) => p.id == id)
    // console.log(index)
    res.json(pessoas.splice(index,1));
})

module.exports = router;