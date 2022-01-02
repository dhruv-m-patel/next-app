import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';

const InternalServerError: NextPage = () => (
  <React.Fragment>
    <Header title="Internal Server Error" />
    <p>
      An unexpected error occurred on server while processing your request,
      please try again.
    </p>
  </React.Fragment>
);

export default InternalServerError;
