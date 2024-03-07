import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
     res.sendFile(`${__dirname}/public/index.html`);
});

app.use(bodyParser.urlencoded({ extend: true }));

app.post("/check", (req, res) => {
     let userPassword = req.body.password;

     if (userPassword === "ILoveProgramming") {
          res.sendFile(`${__dirname}/public/secret.html`);
     } else {
          res.redirect("/");
     }
});

app.listen(PORT, () => {
     console.info(`Listening on http://localhost:${PORT}`);
});