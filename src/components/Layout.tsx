import React from 'react';
import Nav from './Nav';
import Meta from './Meta';
import styles from './Layout.module.css';

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
