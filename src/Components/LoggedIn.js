import React from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import DocList from './DocList';
import CTA from './CTA';
import Footer from './Footer';

export default function LoggedIn({ user, logout }) {
  return (
    <div>
        <NavBar 
            user={user} 
            logout={logout}
        />
        <Jumbotron />
        <DocList />
        <CTA />
        <Footer />
    </div>
  )
}
