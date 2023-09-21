import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        data
      );

      if (response.data) {
        console.log('Реєстрація успішна:', response.data);
        setRegistrationSuccess(true);
      } else {
        console.error('Помилка при реєстрації: отримана порожня відповідь');
      }
    } catch (error) {
      console.error('Помилка при реєстрації:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      {registrationSuccess ? (
        <p>Реєстрація успішна! Ви зареєструвалися.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={handleNameChange}
          />
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
          <button type="submit">Зареєструватися</button>
        </form>
      )}
    </div>
  );
};

export default Registration;