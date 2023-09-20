import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/authSlice';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../pages/Register/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));

const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Phonebook</Typography>
          <Button component={Link} to="/contacts" color="inherit">
            Contacts
          </Button>
          {!isAuthenticated ? (
            <>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/contacts"
              element={
                isAuthenticated ? (
                  <Contacts />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
