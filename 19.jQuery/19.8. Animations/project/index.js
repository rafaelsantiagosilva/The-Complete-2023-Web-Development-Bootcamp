/*$("button").on("click", function(){
    $("h1").toggle(); 
}); */// Se clicar num botão, esconde ou mostra h1 

/*$("button").on("click", function(){
    $("h1").fadeToggle(); 
}); */ // Se clicar num botão, esconde ou mostra h1

/*$("button").on("click", function(){
    $("h1").slideToggle(); 
}); */// Se clicar num botão, esconde ou mostra h1 

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5}).animate({margin: 20}); 
});  // Fazendo uma animação que muda a opacidade do h1