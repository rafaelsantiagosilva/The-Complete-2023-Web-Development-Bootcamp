$("button").click(function(){
    $("h1").css("color", "purple");
}) // Se clicar em algum botão, h1 fica roxo

$("input").keypress(function(event){
    console.log(event.key);
}) // Falando no console qual tecla foi pressionada no input

$(document).keypress(function(event){
    $("h1").text(event.key);
}); // Qualquer tecla que for pressionada dentro do site será exibida no h1

$("h1").on("mouseenter", function(){
    $("h1").css("color", "#FF0000");
}); // Se o moue entrar no h1 a cor dele é mudada para vermelho 

$("h1").on("mouseout", function(){
    $("h1").css("color", "#ff0f");
}); // Se o mouse sair do h1 a cor dele é mudada para amarelo



