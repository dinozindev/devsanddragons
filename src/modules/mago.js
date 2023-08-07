import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    static tipo = "Mago"
    static descricao = "O mago é implacável!"

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia() {
        // se o levelMagico e a inteligencia fore maior ou igual a cinco, retorna a insígnia "Mestre do 'elementoMagico'". Caso contrário, retorna a insígnia padrão do método obterInsignia da classe pai. 
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }

            return super.obterInsignia();
    }
}