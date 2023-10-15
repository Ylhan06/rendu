// class pokemon
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.floor(Math.random() * 100) <= this.luck;
    }
  
    attackPokemon(pokemon) {
      if (this.isLucky()) {
        let damages = this.attack - pokemon.defense;
        pokemon.hp -= damages;
        console.log(
          `${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp ! ${pokemon.name} a désormais ${pokemon.hp}!`
        );
      } else {
        console.log(`${this.name} a raté son attaque !`);
      }
    }
  }
  
  // FIN DE LA CLASSE POKEMON
  // Instanciation des pokemons 
  let absol = new Pokemon("absol", 10, 5, 30, 75);
  let lucario = new Pokemon("lucario", 15, 3, 30, 50);
  
  // Boucle d'attaque/victoire
  
  while (absol.hp > 0 && lucario.hp > 0) {
    absol.attackPokemon(lucario);
    if (lucario.hp <= 0) {
      console.log(`lucario a perdu le combat, il est K.O.`);
      break;
    }
    lucario.attackPokemon(absol);
    if (absol.hp <= 0) {
      console.log(`absol a perdu le combat, il est K.O.`);
      break;
    }
  }
  console.log("Le combat est terminé");