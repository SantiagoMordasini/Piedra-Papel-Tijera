const imgPlayerChoise= document.getElementById('playerChoice');
const imgComputerChoise= document.getElementById('computerChoice');

const pResult= document.getElementById('result') ;
const pScore= document.getElementById('score')  ;

const buttons = document.querySelectorAll('button');

const choices = ["piedra", "papel", "tijera"];

const fileNames = { 'piedra' : 'images/rock.png', 'papel' : 'images/paper.png', 'tijera': 'images/scissors.png',}

let positiveScore = 0;
let negativeScore =0; 


buttons.forEach(
    button => button.addEventListener('click', startGame)
);

function startGame (event) {
    //determinar la eleccion del jugador
    const button =event.currentTarget;
    const playerChoice = button.dataset.eleccion;
    //console.log(playerChoice);

    //determinar la elección de la computadora
    const computerChoice = getComputerChoice ();
    //console.log(computerChoice);

    //determinar quien gana

    const winner= getWinner(playerChoice, computerChoice);

    //console.log (`El ganador es: ${winner}`);

    //mostrar resultados

    imgPlayerChoise.setAttribute('src', fileNames[playerChoice])
    imgComputerChoise.setAttribute('src', fileNames[computerChoice])

    let result;

    if (winner === 'Player') {
        
        result = 'Ganaste';
        ++positiveScore;

    } else if (winner === 'Computer') {

        result = 'Perdiste';
        ++negativeScore;


    } else {

        result = 'Empataste'

    }

    pResult.innerHTML = `${result} eligiendo <strong>${playerChoice}</strong> contra <strong> ${computerChoice}</strong>.`;

    pScore.innerHTML = `Has ganado <strong> ${positiveScore}</strong> veces. Has perdido <strong> ${negativeScore} </strong> veces.`;

    

    
}



function getComputerChoice (){

    //obtener un valor aleatorio i por medio de la constante choices (0,1,2)
    //devolver elección de la computadora

    const i= parseInt(Math.random()*3);
    return choices[i];


}


function getWinner(playerChoice,computerChoice) {

    if (playerChoice === computerChoice) {
        return null;
    }

    if (playerChoice === 'piedra') {
        if (computerChoice === 'papel') {
            return 'Computer';
        } else { 
            return 'Player';
        }
    }

    else if (playerChoice === 'papel') {

        if (computerChoice === 'tijera') {
            return 'Computer';
        } else { 
            return 'Player';
        }

    }

    else { 
        if (computerChoice === 'piedra') {
            return 'Computer';
        } else { 
            return 'Player';
        }

    }

}

