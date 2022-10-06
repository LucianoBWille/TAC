let a = 4
var b = 5
c = a + b
const d = 6

// function test() {
//     if (true) {
//         let x = 2
//         var y = 3
//         // let y = 4    
//     }
//     // console.log(x)
//     let x = 3
//     console.log(x)
//     console.log(y)
//     let y = 5
//     console.log(y)
// }
// test()

function factoryCidade(nome, uf, populacao){
    return {nome, uf, populacao}
}

let cidades = [
    factoryCidade('Medianeira', 'PR', 50000),
    factoryCidade('Missal', 'PR', 10000),
    factoryCidade('Cascavel', 'PR', 350000),
    factoryCidade('São Paulo', 'SP', 12000000),
    factoryCidade('Campinas', 'SP', 1500000),
    factoryCidade('Chapecó', 'SC', 250000),
]


class Cidade {
    nome
    uf
    populacao
    constructor(nome = "", uf = "", populacao = 0){
        this.nome = nome
        this.uf = uf
        this.populacao = populacao
    }
    
    toString() {

    }
}

const curitiba = new Cidade("Curitiba", "PR", 1500000)
const floripa = new Cidade("Floripa", "PR", 600000)
const undef = new Cidade()

// console.log(cidades)
// console.log(curitiba)
// console.log(floripa)
// console.log(undef)

cidades.push(curitiba)
cidades.unshift(floripa)
// console.log(cidades)

// cidades.pop()
// cidades.shift()
// console.log(cidades)

// console.log(cidades.slice(1,3))

// console.log(cidades)

function mostrarElementos(elemento, indice, todoArray){
    console.log(`Posição ${indice} = ${elemento.populacao}`)
    console.table(todoArray)
}

cidades.forEach(mostrarElementos)
console.table(cidades.filter(cidade => cidade.populacao > 150000))
console.table(cidades.filter(cidade => cidade.uf == 'PR'))

console.table(cidades.map(e => e.populacao))

console.table(cidades.filter(c => c.uf == 'PR' && c.populacao > 100000).reduce((acc, cidade) => acc + cidade.populacao, 0))