/* SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
Stampare in console la bici con peso minore utilizzando il destructuring */


//creo array di oggetti con nome delle bici e relativo peso
const bikes = [
    { name: 'Bianchi',
      weight: 5,
    },
    { name: 'Atala',
      weight: 12,
    },
    { name: 'Olmo',
      weight: 15,
    },
    { name: 'Casati',
      weight: 8,
    },
    { name: 'Cinelli',
      weight: 21,
    },
]

//stampo in console la bici con peso minore

const min = Math.min(...bikes.map(item => item.weight))
console.log(min)

