import { useDispatch } from "react-redux";

import { logOut } from "../redux/UserSlice";
import { AppDispatch } from "../redux/store"

export const Logout = () => {
    const dispatch: AppDispatch = useDispatch();

    dispatch(logOut());
}