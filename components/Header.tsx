import React from 'react';
import styles from '../styles/Header.module.css';
import Head from 'next/head';

interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
