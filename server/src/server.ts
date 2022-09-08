import cors from "cors";
import express from "express";

import auth from "./routes/auth";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/server/auth", auth);

app.get("/", (req, res) => {
    res.send("Foi");
});

app.listen(5000, () => console.log("Rodando"));