import { AppDispatch } from "./store";
import { publicRequest } from "../api";
import { IUserLogin } from "../types/user";
import { loginError, loginStart, loginSuccess } from "./UserSlice";

export const Login = async (dispatch: AppDispatch, user: IUserLogin) => {
    dispatch(loginStart());

    publicRequest.post("/auth/login", user)
    .then(({ data }) => {
        dispatch(loginSuccess(data));
    })
    .catch(err => {
        dispatch(loginError(String(err.message)));
    });
}
