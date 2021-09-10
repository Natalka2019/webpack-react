import React from "react";
import styles from "./styles.module.scss";
import smallFood from '../assets/smallFood.png';
import lemon from '../assets/lemon_icon.png';

interface Props { name: string };

const App: React.FC<Props> = ({ name }) => {

  console.log(name);
  console.log(smallFood);
  console.log(lemon);

  return (
    <div>
      <h1 className={styles.greeting}>Hello {name}!!!!</h1>
      <img src={smallFood} />
      <img src={lemon} />
      <h2>React is great!!!</h2>
      <img src="https://www.planetware.com/wpimages/2020/03/canada-best-cities-toronto-ontario.jpg" />
    </div>
  )
}

export default App;