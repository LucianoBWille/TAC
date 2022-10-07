import { Component } from "@angular/core";

@Component({
    selector: 'app-meu-primeiro',
    templateUrl: './meu-primeiro.component.html',
    styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent {
    nome: String = "Irineu"
    sobrenome: String = "você não sabe nem eu"
    frutas = ['banana', 'maçã', 'pera', 'abacaxi', 'limão', 'laranja']

    constructor (){ }

    public clickDoBotao(n: String, sn: String){
        alert(`Olá ${n}, ${sn}`)
    }
}