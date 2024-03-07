// Numeros aleatórios
let numero1 = Math.random() * 6;
numero1 = Math.floor(numero1) + 1;

let numero2 = Math.random() * 6;
numero2 = Math.floor(numero2) + 1;

    // Jogador 1
    if(numero1 == 1){
        document.querySelector("div.jogador1 img").setAttribute("src", "./src/img/dice1.png");
    }
    if(numero1 == 2){
        document.querySelector("div.jogador1 img").setAttribute("src", "./src/img/dice2.png");
    }
    if(numero1 == 3){
        document.querySelector("div.jogador1 img").setAttribute("src", "./src/img/dice3.png");
    }
    if(numero1 == 4){
        document.querySelector("div.jogador1 img").setAttribute("src", "./src/img/dice4.png");
    }
    if(numero1 == 5){
        document.querySelector("div.jogador1 img").setAttribute("src", "./src/img/dice5.png");
    }
    if(numero1 == 6){
        document.querySelector("div.jogador1 img").setAttribute("src", "./src/img/dice6.png");
    }

    // Jogador 2
    if(numero2 == 1){
        document.querySelector("div.jogador2 img").setAttribute("src", "./src/img/dice1.png");
    }
    if(numero2 == 2){
        document.querySelector("div.jogador2 img").setAttribute("src", "./src/img/dice2.png");
    }
    if(numero2 == 3){
        document.querySelector("div.jogador2 img").setAttribute("src", "./src/img/dice3.png");
    }
    if(numero2 == 4){
        document.querySelector("div.jogador2 img").setAttribute("src", "./src/img/dice4.png");
    }
    if(numero2 == 5){
        document.querySelector("div.jogador2 img").setAttribute("src", "./src/img/dice5.png");
    }
    if(numero2 == 6){
        document.querySelector("div.jogador2 img").setAttribute("src", "./src/img/dice6.png");
    }

// Qual o vencedor?
    // Jogador 1
        if(numero1 > numero2){
            document.querySelector("h1").textContent = "Jogador 1 Ganhou!";
        }
    // Jogador 2
        if(numero1 < numero2){
            document.querySelector("h1").textContent = "Jogador 2 Ganhou!";
        }
    // Empate
        if(numero1 == numero2){
            document.querySelector("h1").textContent = "Empate!!!";
        }

        // var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

        // var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
        
        // var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
        
        // var image1 = document.querySelectorAll("img")[0];
        
        // image1.setAttribute("src", randomImageSource);
        
        
        // var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        
        // var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        
        // document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
        
        
        // //If player 1 wins
        // if (randomNumber1 > randomNumber2) {
        //   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
        // }
        // else if (randomNumber2 > randomNumber1) {
        //   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        // }
        // else {
        //   document.querySelector("h1").innerHTML = "Draw!";
        // }
        