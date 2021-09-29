import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import mealsBanner from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React meals!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsBanner} alt="" />
      </div>
    </>
  );
};

export default Header;
