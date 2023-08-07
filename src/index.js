import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const magaJulia = new Mago("Julia", 8, "gelo", 7, 10)
const arqueiroJulio = new Arqueiro("Marcos", 5, 5);
const arqueiroMagoRafael = new ArqueiroMago("Rafael", 7, 10, "Ar", 5, 8);
const guerreiroCarlos = new Guerreiro("Carlos", 8);

const personagens = [
  magoAntonio,
  magaJulia,
  arqueiroJulio,
  arqueiroMagoRafael,
  guerreiroCarlos
]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroJulio, arqueiroMagoRafael))