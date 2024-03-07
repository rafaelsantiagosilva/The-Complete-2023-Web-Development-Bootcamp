import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
     response.send("<h1 style='font-family: sans-serif'>Bem-vindo!</h1>");
})

app.get("/about", (request, response) => {
     response.send("<h2>Sobre nós:</h2>");
});

app.get("/contact", (request, response) => {
     response.send("<h3>Nossos contatos:</h3>");
})

app.listen(PORT, () => {
     console.log("Server is running!")
});