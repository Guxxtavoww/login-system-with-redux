import cors from "cors";
import express from "express";

import { IUserRegister } from "../types/user";

const router = express.Router();

const users: IUserRegister[] = [
    {
        username: "Gustavin",
        email: "gustavoaugustocar@hotmail.com",
        password: "909090",
        profilePic: "https://pbs.twimg.com/profile_images/1377408517305405442/cNqTKGEf_400x400.jpg",
    },
    {
        username: "Rodrigin",
        email: "teste@hotmail.com",
        password: "8=>",
        profilePic: "https://i.picsum.photos/id/225/200/300.jpg?hmac=HoopVmaDuZW8v_8n33eWQvN3hdmFj9gP2m3AWvybT8s",
    }
]

router.post("/login", cors(), (req, res) => {
    const { email } = req.body;

    const user = users.find(user => user.password === req.body.password && user.email === email);

    if(!user) {
        res.status(204).json("Nada encontrado");

        return;
    }

    const { password, ...rest } = user;
    
    res.status(200).json(rest);
});

router.post("/register", cors(), (req, res) => {
    const body = req.body as IUserRegister;

    const newUser = users.push(body);

    if(newUser) {
        const user = users.find(user => user.email === body.email && body.username === user.username);
        
        const { password, ...rest } = user!;

        return res.status(200).json(rest);
    }
    res.status(500).json("Deu bosta");
});

export default router;