import React from 'react';
import styles from './Header.module.css';
import Meta from './Meta';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <header>
    <Meta title={title} description={title} />
    <h1 className={styles.title}>{title}</h1>
  </header>
);

export default Header;
