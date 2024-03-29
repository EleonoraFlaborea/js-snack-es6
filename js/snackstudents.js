/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
Questo è l'elenco degli studenti:
Id|Name|Grades
213|Marco della Rovere|78
110|Paola Cortellessa|96
250|Andrea Mantegna|48
145|Gaia Borromini|74
196|Luigi Grimaldello|68
102|Piero della Francesca|50
120|Francesca da Polenta|84
 */


const students = [ 
  { id:  213,
    name: 'Marco della Rovere',
    grades: 78,
  },

  { id:  110,
    name: 'Paola Cortellessa',
    grades: 96,
  }, 

  { id: 250 ,
    name: 'Andrea Mantegna',
    grades: 48 ,
  },

  { id: 145 ,
    name: 'Gaia Borromini' ,
    grades: 74,
  },

  { id: 196 ,
    name: 'Luigi Grimaldello',
    grades: 68,
  },

  { id: 102 ,
    name: 'Piero della Francesca' ,
    grades: 50,
  },

  { id: 120 ,
    name: 'Francesca da Polenta',
    grades: 84,
  },
]


//creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const excellentGrades = students.filter((student) => {
  if (student.grades >= 70) return true;
  else return false;
});

console.log(excellentGrades);

//destructuring
//const excellentGrades = students.filter(({grades}) => grades > 70);

//creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const gradesAndIds = students.filter((student) => {
  if (student.grades >= 70 && student.id >= 120) return true;
  else return false;
});

console.log(gradesAndIds);


//creare una lista contenente il loro nome tutto in maiuscolo 
const UpperCaseNames = students.map(student => (student.name.toUpperCase()));
console.log(UpperCaseNames)