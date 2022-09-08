import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.get("/", (req, res) => {
    res.send("Oi");
});

app.listen(5000, () => console.log('Rodando'));