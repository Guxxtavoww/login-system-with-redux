import cors from "cors";
import express from "express";

const router = express.Router();

const users = [
    {
        username: "Gustavin",
        email: "gustavoaugustocar@hotmail.com",
        senha: "909090",
        profilePic: "https://pbs.twimg.com/profile_images/1377408517305405442/cNqTKGEf_400x400.jpg",
        posts: []
    },
    {
        username: "Rodrigin",
        email: "teste@hotmail.com",
        senha: "8=>",
        profilePic: "https://i.picsum.photos/id/225/200/300.jpg?hmac=HoopVmaDuZW8v_8n33eWQvN3hdmFj9gP2m3AWvybT8s",
        posts: []
    }
]

router.post("/login", cors(), (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.senha === password && user.email === email);

    if(!user) {
        res.status(204).json("Nada encontrado");

        return;
    }

    const { senha, ...rest } = user;
    
    res.status(200).json(rest);
});

router.get("/cadastro", cors(), (req, res) => {
    res.send("Login")
});

export default router;