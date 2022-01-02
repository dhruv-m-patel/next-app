import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';

const NotFound: NextPage = () => (
  <React.Fragment>
    <Header title="Page Not Found" />
    <p>
      The page you&rsquo;re looking for either does not exist or has been moved
      somewhere else.
    </p>
  </React.Fragment>
);

export default NotFound;
