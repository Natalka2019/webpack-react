import React from "react";
import styles from "./styles.module.scss";

const NotFound: React.FC = () => (
  <div className={styles.NotFound}>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
