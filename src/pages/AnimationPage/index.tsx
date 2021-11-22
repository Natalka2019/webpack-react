import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Routes from "../../routes";
import { Logo } from "@/components";

const Animation: React.FC = () => {
  const [count, setCount] = React.useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef(0);
  const previousTimeRef = React.useRef();

  const animate = (time: any) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return (
    <div className={styles.Animation}>
      <div className={styles.Animation__element}>
        <div className={styles.Animation__sun}>
          <Link className={styles.Animation__logoWrapper} to={Routes.MOVIES}>
            <Logo />
            <div className={styles.Animation__timer}>{Math.round(count)}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Animation;
