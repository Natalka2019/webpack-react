import React from 'react';
import styles from './styles.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      netflix
      <span className={`${styles.logoEnd}`}>roulette</span>
    </div>
  );
};
export default Logo;
