import React from "react";
import styles from "./Main.module.css";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <main>
      <Welcome />
      <AboutUs />
      <Products />
    </main>
  );
};

export default Main;
