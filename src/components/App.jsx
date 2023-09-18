import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';

const ContactList = lazy(() =>
  import('../pages/Contacts/ContactList/ContactList')
);
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const Filter = lazy(() => import('./Filter/Filter'));
const Registration = lazy(() =>
  import('../pages/Register/Registration/Registration')
);
const Login = lazy(() => import('../pages/Login/Login/Login'));

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Phonebook</Typography>
          <Button component={Link} to="/contacts" color="inherit">
            Contacts
          </Button>
          <Button component={Link} to="/register" color="inherit">
            Register
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<ContactList />}>
              <Route index element={<ContactForm />} />
              <Route path=":id" element={<Filter />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
