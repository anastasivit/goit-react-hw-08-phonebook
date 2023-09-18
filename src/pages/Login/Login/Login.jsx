import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      await dispatch(loginUser(userData));
      setLoginSuccess(true);
    } catch (error) {
      console.error('Помилка при вході:', error);
    }
  };

  return (
    <div>
      <h2>Логін</h2>
      {loginSuccess ? (
        <p>Логін успішний! Ви увійшли в систему.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Увійти</button>
        </form>
      )}
    </div>
  );
};

export default Login;
