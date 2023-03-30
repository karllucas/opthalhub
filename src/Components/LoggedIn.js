import React from 'react';
import Jumbotron from './Jumbotron';
import DocList from './DocList';
import CTA from './CTA';

export default function LoggedIn({ user }) {
  return (
    <div>
        <Jumbotron />
        <DocList user={user} />
        <CTA />
    </div>
  )
}
