import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import LoggedIn from './Components/LoggedIn';
import LoggedOut from './Components/LoggedOut';
import NotFound from './Components/NotFound';

import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <NavBar 
              user={user} 
              logout={logout}
          />
        <Routes>
          <Route 
            exact path="/" 
            element={<LoggedIn user={user} logout={logout} />}
          />
          {/* <Route path="/booking" element={<Booking />} /> */}
          <Route path="*" element={<NotFound /> }/>
        </Routes>
        <Footer />
      </>
    );
  } else {
    return (
      <LoggedOut
        loginWithRedirect={loginWithRedirect}
      />
    )
  }
}

export default App;
