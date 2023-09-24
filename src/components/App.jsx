import React, { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, setIsAuthenticated } from '../redux/authSlice';

const Registration = lazy(() => import('pages/Register/Registration'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const PrivateRoute = lazy(() => import('../redux/PrivateRoute'));
const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  }, [dispatch]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Phonebook</Typography>
          {isAuthenticated && (
            <Button component={Link} to="/contacts" color="inherit">
              Contacts
            </Button>
          )}
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/register" color="inherit">
            Register
          </Button>
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
                  <>
                    {console.log('Not authenticated, redirecting to /login')}
                    <Navigate to="/login" replace />
                  </>
                )
              }
            />
            <Route
              path="/register"
              element={
                isAuthenticated ? (
                  <>
                    {console.log('Authenticated, redirecting to /contacts')}
                    <Navigate to="/contacts" replace />
                  </>
                ) : (
                  <Registration />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <>
                    {console.log('Authenticated, redirecting to /contacts')}
                    <Navigate to="/contacts" replace />
                  </>
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/*" element={<Navigate to="/contacts" />} />{' '}
            {/* Опціонально, для перенаправлення на /contacts за замовчуванням */}
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
