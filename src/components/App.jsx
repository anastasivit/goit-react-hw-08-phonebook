import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import ContactList from './ContactList/ContactList';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Phonebook</Typography>
          <Button
            component={Link}
            to="/goit-react-hw-08-phonebook/contacts"
            color="inherit"
          >
            Contacts
          </Button>
          <Button
            component={Link}
            to="/goit-react-hw-08-phonebook/register"
            color="inherit"
          >
            Register
          </Button>
          <Button
            component={Link}
            to="/goit-react-hw-08-phonebook/login"
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route
            path="/goit-react-hw-08-phonebook/register"
            element={<Registration />}
          />
          <Route path="/goit-react-hw-08-phonebook/login" element={<Login />} />
          <Route
            path="/goit-react-hw-08-phonebook/contacts"
            element={<ContactList />}
          >
            <Route index element={<ContactForm />} />
            <Route path=":id" element={<Filter />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
