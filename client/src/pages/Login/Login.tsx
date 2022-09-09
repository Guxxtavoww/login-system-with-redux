import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Login.scss';
import { IUserLogin } from '../../types/user';
import { RootState } from '../../redux/store';
import { UserLogin } from '../../redux/userApiCall';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, isFetching } = useSelector(
    (state: RootState) => state.user_redux,
  );

  const [formData, setFormData] = useState<IUserLogin>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    await UserLogin(dispatch, formData);

    navigate('/');
  };

  return (
    <div className="loginWrapper app_flex">
      <form onSubmit={handleSubmit} className="form">
        <div className="inputBx">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Seu E-mail"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="inputBx">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Sua Senha"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <button type="submit" disabled={isFetching}>
          Logar
        </button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default Login;
