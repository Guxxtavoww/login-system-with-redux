import { AppDispatch } from "./store";
import { publicRequest } from "../api";
import { IUserLogin, IUserRegister } from "../types/user";
import { loginError, loginStart, loginSuccess } from "./UserSlice";

export const UserLogin = async (dipatch: AppDispatch, user: IUserLogin) => {
    dipatch(loginStart());

    publicRequest.post("/auth/login", user)
    .then(({ data }) => {
        dipatch(loginSuccess(data));
    })
    .catch(err => {
        dipatch(loginError(String(err.message)));
    });
}

export const UserRegisterAndLogin = async (dipatch: AppDispatch, user: IUserRegister) => {
    dipatch(loginStart());

    publicRequest.post("/auth/register", user)
    .then(({ data }) => {
        dipatch(loginSuccess(data));
    })
    .catch((err) => {
        dipatch(loginError(String(err.message)));
    });
}
