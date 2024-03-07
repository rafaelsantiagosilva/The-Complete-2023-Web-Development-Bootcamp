var buttonColors = ["green", "red", "yellow", "blue"];
var indexColors = [1, 2, 3, 4]
var gamePattern = [];
var userClickedPattern = [];
var level = 1;
var audio;

$(document).on('keypress', function(event){
    $("h1").text('Level '+level);
    nextSequence();    
})

$("button").on('click', function(){
    //Pegando o ID do objeto clicado
    var userChoseColor = $(this).attr("id");
    userClickedPattern.push(userChoseColor);
    animate(userChoseColor);
    checkAnswer()
})

function nextSequence(){
    // Criando um número aleatório
    let randomNumber = Math.round(Math.random()*3);
    let randomChoseColor = buttonColors[randomNumber];
    gamePattern.push(randomChoseColor);
    animate(randomChoseColor);
    level++;
}

function checkAnswer(currentLevel){
    return 
}

function animate(button){
    // Usando jquery para selecionar o botão acionado
    $("#"+button).fadeOut(100).fadeIn(100);

    // Audio do botão
    var audio = new Audio("./sounds/" + button + ".mp3");
    audio.play();
}