import React from 'react';
import styles from './styles.module.scss';

const SearchPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default SearchPage;
