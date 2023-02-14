'use strict';
// Declaración de constantes desde HTML
const userNum = document.querySelector('.js-userNum');
const button = document.querySelector('.js-button');
const hint = document.querySelector('.js-hint');
const attempts = document.querySelector('.js-attemps');

// Funciones
function compareNum(){
    let numCompare = parseInt(userNum.value);
    if (numCompare === randomNum){
        hint.innerHTML = "Has acertado!";
    }
    else 
        if (numCompare > randomNum){
            attemptsTotal++;
            hint.innerHTML = "Prueba con un número más bajo";
            attempts.innerHTML = `Número de intentos: ${attemptsTotal}`;
        } else {
            attemptsTotal++;
            hint.innerHTML = "Prueba con un número más alto";
            attempts.innerHTML = `Número de intentos: ${attemptsTotal}`;
        }
}

// Eventos
function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
} 

function handleClickButton(event){
    event.preventDefault();
    compareNum();    
}

const randomNum = getRandomNumber(100);
let attemptsTotal = 0;
console.log(randomNum);

button.addEventListener('click', handleClickButton);