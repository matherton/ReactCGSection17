import React from "react";

import styles from "./Header.module.css";
import mealsBanner from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React meals!</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsBanner} alt="" />
      </div>
    </>
  );
};

export default Header;
