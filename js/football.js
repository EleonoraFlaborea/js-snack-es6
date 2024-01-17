/*SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console*/

let footballTeams = [
    { name: 'Juventus',
      points: 0,
      fouls: 0,
    },
    { name: 'Milan',
      points: 0,
      fouls: 0,
    },
    { name: 'Inter',
      points: 0,
      fouls: 0,
    },
    { name: 'Sampdoria',
      points: 0,
      fouls: 0,
    },
    { name: 'Venezia',
      points: 0,
      fouls: 0,
    },

]

//Genero numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
footballTeams.points = 0;

for (let i = 0; i < footballTeams.length; i++){
 
  randomNumber = (Math.floor(Math.random()* 100)+1);
  let newPoints = randomNumber;

  //footballTeams.push({points: newPoints})
  //console.log(randomNumber)
  
  //footballTeams.push{points: newPoints}
  //footballTeams.points = newPoints;

  
  //console.log(footballTeams)
}

console.log()

//creo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console