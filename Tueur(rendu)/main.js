// Caracteristique cliché + prenom

let tableauCharacteristique = ['nerd', 'sportif', 'intello', 'populaire', 'courageux', 'delinquant']
let tableauprenom = ['Kevin', 'jennifer', 'karl', 'Alex', 'jasmine', 'eglantine']

class survivant{
    constructor(prenom, characteristique) {
        this.prenom = prenom
        this.characteristique = characteristique
    }
}

let tableauvide = [] // tableau pour la selection ds survivants
for (let i = 0; i < 6; i++) {
    let choixaleatoire = Math.round(Math.random() * (7 - i))
    let survivant1 = survivant(tableauprenom[choixaleatoire], tableauCharacteristique[choixaleatoire])
    tableauvide.push(survivant1)
    tableauprenom.splice(choixaleatoire, choixaleatoire)
    tableauCharacteristique.splice(choixaleatoire, choixaleatoire)
}


class Tueur {  // class aussi pareil que les survivants
    constructor() {
     this.name = 'jason'
     this.hp = 100
     this.tableaau = []
    }
    attack(tableauVide) {
       let victime = Math.random(Math.random()) * (tableauVide.lenght - 1)
        // start a 0 donc il faut -1
        let jsp = Math.random()
        if (jsp < 0.3) {
        console.log(tableauVide[victime].prenom + '' + tableauVide[victime].characteristique + 'a été tué par jason')
        this.tableau.pusg(tableauVide[victime].prenom + '')
        tableauVide.splice(victime, victime) // tué
    } else if (0.3 <= jsp && <= 0.7) {
        console.log(tableauVide[victime].prenom + 'a esquivé et fait 10 de dégats')
        this.hp = this.hp - 10 // moins de hp pour jasoon
    } else if (0.7 < jsp) {
        console.log(tableauVide[victime].prenom + '' + tableauVide[victime].characteristique + ' se sacrifie et fait 15 de dégats')
        this.hp = this.hp - 15
        this.tableau.push(tableauVide[victime].prenom + '')
        tableauVide.splice(victime, victime) // tué
    
    }
   }
}

let killer = new Tueur()

while(killer.hp > 0 && tableauvide.length != 0) {
    killer.attack(tableauvide)
}
if (killer.hp = 0) {
    console.log('jason is dead')
}
else if (tableauvide.length = 1) {
    console.log('jason a tué' + killer.tableau + 'RIP');
}
