import React from "react";

import smallFood from "assets/smallFood.png";
import lemon from "assets/lemon_icon.png";
import netflixBackground from "assets/netflixBackground.jpg";
import styles from "./styles.module.scss";

interface Props {
  name: string;
}

const MainPage: React.FC<Props> = ({ name }) => {
  console.log(name);
  console.log(smallFood);
  console.log(lemon);
  console.log();

  return (
    <div>
      <h1 className={styles.greeting}>Hello {name}!!!!</h1>
      <img src={smallFood} />
      <img src={lemon} />
      <img src={netflixBackground} />
      <h2>React is great!!!</h2>
      <p>Some paragraph</p>
    </div>
  );
};

export default MainPage;
