import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Register.scss';
import { IUserRegister } from '../../types/user';
import { RootState } from '../../redux/store';
import { UserRegisterAndLogin } from '../../redux/userApiCall';

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, isFetching } = useSelector(
    (state: RootState) => state.user_redux,
  );

  const [formData, setFormData] = useState<IUserRegister>({
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    await UserRegisterAndLogin(dispatch, formData);

    navigate('/');
  };

  return (
    <div className="loginWrapper app_flex">
      <form onSubmit={handleSubmit} className="form">
        <div className="inputBx">
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            placeholder="Seu Nome de Usuário"
            name="username"
            id="username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
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

export default Register;
