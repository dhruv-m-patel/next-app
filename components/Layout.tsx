import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Meta from './Meta';

const Layout = ({ children }: { children: React.ReactNode | undefined }) => (
  <React.Fragment>
    <Meta />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  </React.Fragment>
);

export default Layout;
