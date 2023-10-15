let santeMentale = 10
let nbrDeFeux = 30 // nombre de feux rouge

function feuxMusique() {
    nbrDeFeux++ 
    const musique = Math.random() * 5

     if (musique === 1) {
     santeMentale += 0
    } else if (musique === 2) {
        santeMentale -= 1
        console.log('je suis passé')
    }
    else if (musique === 3) {
        santeMentale -= 0
    }
    else if (musique === 4) {
        santeMentale -= 0
    }
    else if (musique === 5) {
        santeMentale -= 0
    }   
    return musique 

}

while (santeMentale > 0 && nbrDeFeux > 0) {
    const musique = feuxMusique()
    break
}

if (santeMentale <= 0) {
    console.log('John a épuiseé sa santé mentale. Il EXPLOSE !!!!')
} else {
    console.log('Jhon est arrivé en changeant de : ' + (10-santeMentale) + 'taxi')

}
    