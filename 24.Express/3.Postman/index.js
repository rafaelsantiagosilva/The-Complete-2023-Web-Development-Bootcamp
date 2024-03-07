"use strict";

import express from 'express';
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
     res.send("<h1>Welcome! Here is the home p</h1>");
     res.send("<h2>Try other url</h2>");
});

app.post("/register", (req, res) => {
     res.sendStatus(201);
});

app.put("/user/rafael", (req, res) => {
     res.sendStatus(200);
});

app.patch("/user/rafael", (req, res) => {
     res.sendStatus(200);
})

app.delete("/user/rafael", (req, res) => {
     res.sendStatus(200);
})

app.listen(PORT, () => {
     console.log(`Server is start on ${PORT}`);
})  