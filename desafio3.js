let tipoHeroi = ["Mago", "Guerreiro", "Monge", "Ninja"]


class tipoAtaque{
    constructor(ataqueHeroi){
        this.ataqueHeroi = ataqueHeroi
    }

    escreva(){
        console.log(`O ${tipoHeroi[0]} atacou usando ${this.ataqueHeroi}`)
    }
    
}

    let poderUsado = new tipoAtaque("magia")


poderUsado.escreva()