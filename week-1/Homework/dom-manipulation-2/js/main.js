
//PART 1 - When clicking **blue** it should change:

//**Jumbotron** background color to `#588fbd`
let button = document.querySelector("#blueBtn");
button.addEventListener("click", function(event) {
    let elements = document.querySelector(".jumbotron");
    elements.style.backgroundColor= "#588fbd";
});


//**Donate a bike** button background color to `#ffa500`
let secondButton = document.querySelector("#blueBtn")
secondButton.addEventListener("click", function(event) {
    let element2 = document.querySelector("#donateButton");
    element2.style.backgroundColor= "#ffa500";
});


//**Volunteer** button background color to `black` and text color to `white`
let thirdButton= document.querySelector("#blueBtn");
thirdButton.addEventListener("click", function(event) {
    let element3 = document.querySelector("#volunteerButton");
    element3.style.backgroundColor= "black";
    element3.style.color= "white";
});


// When clicking **orange** it should change:
//**Jumbotron** background color to `#f0ad4e`
let orangeButton= document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", function(event) {
    let orangeElement= document.querySelector(".jumbotron");
    orangeElement.style.backgroundColor= "#f0ad4e";
});



//- **Donate a bike** button background color to `#5751fd`
let orangeButton2= document.querySelector("#orangeBtn");
orangeButton2.addEventListener("click", function(event) {
    let orangeElement2= document.querySelector("#donateButton");
    orangeElement2.style.backgroundColor= "#5751fd";
});


//**Volunteer** button background color to `#31b0d5` and text color to `white`
let orangeButton3= document.querySelector("#orangeBtn"); //acessa o botao laranja
orangeButton3.addEventListener("click", function(event) { //add funcao ao clicar botao
    let orangeElement3= document.querySelector("#volunteerButton"); //acessa onde deve mudar ao clicar o botao
    orangeElement3.style.backgroundColor= "#31b0d5";
    orangeElement3.style.color= "white";
});


//When clicking **green** it should change:
//**Jumbotron** background color to `#87ca8a`
let greenButton= document.querySelector("#greenBtn");
greenButton.addEventListener("click", function(event) {
    let greenElement= document.querySelector(".jumbotron");
    greenElement.style.backgroundColor= "#87ca8a";
});


//**Donate a bike** button background color to `black`
let greenButton2= document.querySelector("#greenBtn");
greenButton2.addEventListener("click", function(event) {
    let greenElement2= document.querySelector("#donateButton" );
    greenElement2.style.backgroundColor= "black";
});


//**Volunteer** button background color to `#8c9c08`
let greenButton3= document.querySelector("#greenBtn");
greenButton3.addEventListener("click", function(event) {
    let greenElement3= document.querySelector("#volunteerButton");
    greenElement3.style.backgroundColor= "#8c9c08";
});


//PART 2- When the submit button is pressed, it should check that all the form fields are valid:

let email= document.querySelector("#exampleInputEmail1"); //acessa o input do email.
let inputName= document.querySelector("#example-text-input"); //acessa campo nome.
let inputText= document.querySelector("#exampleTextarea"); //acessa input text.
let submitButton= document.querySelector("#submitButton" ); //acesso botao submit.

submitButton.addEventListener("click", function(event) {
    let emailElement= document.querySelector("#exampleInputEmail1"); //acessa o input do email.
    let emailTxt = (emailElement.value === undefined ? '' : emailElement.value) ;
    
    let nameElement= document.querySelector("#example-text-input"); //acessa campo nome.
    let nameTxt = (nameElement.value === undefined ? '' : nameElement.value);
    
    let textElement= document.querySelector("#exampleTextarea"); //acessa input text.
    let textTxt = textElement.value === undefined ? '' : textElement.value;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailTxt, nameTxt, textTxt)
    if (emailTxt.length > 0 && emailTxt.match(regexEmail) && nameTxt.length > 0 && textTxt.length > 0) {
        alert("thank you for filling out the form");
        emailElement.value = '';
        emailElement.style.backgroundColor= "white";
        textElement.value = '';
        textElement.style.backgroundColor= "white";
        nameElement.value ='';
        nameElement.style.backgroundColor= "white";

    } else {
        emailElement.style.backgroundColor= "red";
        nameElement.style.backgroundColor= "red";
        textElement.style.backgroundColor= "red";
    }
    event.preventDefault(); //verifica todos os campos e depois para.

});









