import React from "react";
import styles from "./styles.module.scss";
import Logo from "../Logo";

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
