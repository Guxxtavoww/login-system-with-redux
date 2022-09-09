import { AppDispatch } from './store';
import { publicRequest } from '../api';
import { IUserData } from '../types/user';
import { loginError, loginStart, loginSuccess } from './UserSlice';

export const UserLogin = async (
  dipatch: AppDispatch,
  user: IUserData,
  isRegister: boolean,
) => {
  dipatch(loginStart());

  return publicRequest
    .post(`${!isRegister ? '/auth/login' : '/auth/register'}`, user)
    .then(({ data, request }) => {
      if (request.status !== 200) {
        const error = String(request.message);

        dipatch(loginError(error));
      }
      dipatch(loginSuccess(data));
    })
    .catch((err) => {
      dipatch(loginError(String(err.message)));
    });
};
