import React from 'react';
import './App.css';
import LoggedIn from './Components/LoggedIn';
import LoggedOut from './Components/LoggedOut';

import { useAuth0 } from '@auth0/auth0-react';


function App() {

  // return (
  //   <div className="App">
  //     <NavBar />
  //     <Jumbotron />
  //     <DocList />
  //     <CTA />
  //     <Footer />
  //     <LoginButton />
  //   </div>
  // );
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
      <LoggedIn 
        user={user}
        logout={logout}
      />
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
