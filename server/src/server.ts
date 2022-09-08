import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Foi");
});

app.listen(5000, () => console.log("Rodando"));