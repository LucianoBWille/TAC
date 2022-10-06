const Express = require('express')

const port = 3000

const app = Express()
app.use(Express.json())

const indexRouter = require('./routes/index')
const pessoaRouter = require('./routes/pessoa')

app.use('/', indexRouter); // rotas da aplicação
app.use('/pessoa', pessoaRouter); // rotas de pessoa

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})