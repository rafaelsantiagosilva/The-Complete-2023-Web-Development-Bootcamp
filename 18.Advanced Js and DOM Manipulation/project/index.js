var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Fazendo com que cada um dos botões faça cada um dessas funções ao ser clicado
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // this = elemento sendo usado
        var buttonInnerHTML = this.innerHTML;

        // Chamando a função de fazer som de acordo com o clique
        makeSound(buttonInnerHTML);

        // Chamando a função de fazer animação de acordo com o clique
        buttonAnimation(buttonInnerHTML);
    })
}

// Detectando qual tecla foi pressionada
document.addEventListener("keypress", function (event) { // Usando o event para receber qual tecla é pressionada

    // Chamando a função de fazer som de acordo com a tecla qual tecla foi pressionada
    makeSound(event.key);

    // Chamando a função de fazer animação de acordo com a tecla qual tecla foi pressionada
    buttonAnimation(event.key);
})

function makeSound(key) {

    // Usando o switch-case
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

// Adicionando animação
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    // Definindo tempo em que a classe pressed vai estar aplicada
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}