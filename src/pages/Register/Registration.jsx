import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup', // Змінено URL на сервер
        formData
      );
      console.log('Успішна реєстрація:', response.data);

      // Перенаправляємо користувача на сторінку "Контакти"
      navigate('/contacts');

      // Диспетчеризуємо дію для оновлення авторизації користувача
      dispatch(setUser(response.data));

      // Очищуємо дані форми
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Помилка при реєстрації:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="Name"
          value={name}
          onChange={handleChange}
          required
        />
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
          Register
        </Button>
      </form>
      <Typography>
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </div>
  );
};

export default Registration;
