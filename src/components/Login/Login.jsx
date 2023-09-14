import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        data
      );

      if (response.data) {
        console.log('Логін успішний:', response.data);
        setLoginSuccess(true);
      } else {
        console.error('Помилка при вході: отримана порожня відповідь');
      }
    } catch (error) {
      console.error('Помилка при вході:', error.response.data);
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
