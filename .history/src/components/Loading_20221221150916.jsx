import React from 'react';
import styles from '../css/Loading.module.css';

export default function Loading() {
  return (
    <main className={styles.main}>
      <img src="/img/spin.gif" alt="loading" />
    </main>
  );
}
