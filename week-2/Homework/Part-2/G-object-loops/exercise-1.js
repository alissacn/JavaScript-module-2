// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };


for (const key in studentGrades) { //acessa os valores da chave
  if (studentGrades[key] > 18) { //se o value for menor que 18
    console.log(`${key} = ${studentGrades[key]}`); //imprime a key e o value.
  }
};





  // Prints
  // TOM - 20
  // ABDUL - 19
