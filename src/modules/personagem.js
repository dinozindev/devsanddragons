// classe responsável por construir o modelo do objeto. 

export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    tipo
    descricao

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
    }

    aumentarLevel() {
        this.level += 1
    }

    diminuirLevel() {
        this.level -= 1;
    }

    get level() {
        return this.#level;
    }

    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel;
        }
    }

    // se o level do personagem for maior ou igual a 5, retorna o título de Implacável "tipo". Caso seja menor que 5, retorna o título de "tipo" iniciante.
    obterInsignia() {
        if(this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return "Empate!"
        }
        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`

    }
}

