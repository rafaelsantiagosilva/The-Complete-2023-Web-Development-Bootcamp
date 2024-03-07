import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
     const data = {
          seconds: new Date().getSeconds(),
          fruits: ["maçã", "banana", "cereja"],
          htmlContent: "<em>Isso é um pouco de texto itálico</em>"
     };

     res.render("index.ejs", data);
});

app.listen(3000, () => {
     console.log("Live: http://localhost:" + PORT);
})