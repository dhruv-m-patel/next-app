import React from 'react';
import Head from 'next/head';

interface MetaProps {
  title: string;
  description: string;
}

const Meta = ({
  title = 'Next App',
  description = 'A starter next app',
}): JSX.Element => (
  <Head>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </Head>
);

export default Meta;
