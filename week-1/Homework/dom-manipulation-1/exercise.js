/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//1. all the "p" element nodes of the document,should log a list of nodes with a length of 6 - DONE
let allP= document.getElementsByTagName("p");
for (let i = 0; i < allP.length; i++ ) {
    console.log(allP[i]);
};


/*
Task 2- DONE
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let clickAlert = document.querySelector("#alertBtn");
clickAlert.addEventListener("click", messageWhenClick);

function messageWhenClick() {
    alert("Thanks for visiting Bikes for Refugees!")
}


/*
Task 3 - DONE
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


let colorButton = document.querySelector("#bgrChangeBtn");

colorButton.addEventListener("click", function (event) {
    document.body.style.backgroundColor= "pink";
});



//4- When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”

let addParagraph = document.querySelector("#addTextBtn"); //acessa botao

addParagraph.addEventListener("click", function(event) { //add funcao para evento
    const myElm = document.createElement("p"); //cria p element
    myElm.innerText = "THIS IS A PARAGRAPH"; //add texto ao paragrafo
    document.querySelector(".article").appendChild(myElm); //add o paragrafo na secao escolhida
});




/*
Task 5 -DONE
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let buttonLink= document.querySelector("#largerLinksBtn");

buttonLink.addEventListener("click", function (event) {
    let elements = document.getElementsByTagName('a') 
    for (const element of elements){
        element.style.fontSize = "20px";
    }
});


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

let getText = document.querySelector("#addTextBtn");
getText.addEventListener("click", function(event) {
    let inputAddText = document.querySelector("#addButton");
    const newElement = document.createElement("p"); 
    document.querySelector("#addButton").appendChild(newElement);
});


/*
Task 7 -DONE
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/


let colors = ["pink", "#cfbaf0", "#sf1c0e8", "#90dbf4", "#fbf8cc"];
let i = 0;

document.querySelector("#bgrChangeBtn").addEventListener("click", function (event) {
    if (i < colors.length) {
        ++i
    } else {
        i = 0; //reseta a funcao e comeca tudo de novo.
    }
document.body.style.backgroundColor = colors[i];
    
});
  
   


