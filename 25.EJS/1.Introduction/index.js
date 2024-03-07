"use strict";

import express from "express";
import ejs from "ejs";

const app = express();
const PORT = 3000;

function getWeekDay() {
     let date = new Date();
     let weekDay = date.getDay();
     return weekDay;
}

function getMessage(weekDay) {
     let message = "";

     if (weekDay === 0 || weekDay === 6) {
          message = "É final de semana, vamos se divertir!";
     } else {
          message = "É dia de semana, vamos trabalhar duro!";
     }

     return message;
}

app.get("/", (req, res) => {
     let weekDay = getWeekDay();
     let message = getMessage(weekDay);
     res.render("index.ejs", { message: message });
});

app.listen(PORT, () => {
     console.log(`Listening: http://localhost:${PORT}`);
});