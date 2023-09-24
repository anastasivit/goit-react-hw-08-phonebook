import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom'; // Оновлено імпорт

import { Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Оновлений імпорт

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        formData
      );
      console.log('Успішний логін:', response.data);

      // Диспетчеризуємо дію для оновлення авторизації користувача
      dispatch(setUser(response.data));

      // Перенаправляємо користувача на сторінку "Контакти"
      navigate('/contacts');

      // Очищуємо дані форми
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Помилка при логіні:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </form>
      <Typography>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </div>
  );
};

export default Login;
