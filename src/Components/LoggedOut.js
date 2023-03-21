import React from 'react';
import NavBarLanding from './NavBarLanding';
import Landing from './Landing';
import FooterLanding from './FooterLanding';

export default function LoggedOut({ loginWithRedirect }) {
  return (
    <div>
        <NavBarLanding />
        <Landing loginWithRedirect={loginWithRedirect}/>
        <FooterLanding />
    </div>
  )
}
