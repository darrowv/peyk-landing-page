import React from "react";
import AboutUs from "./AboutUs";
import EmailForm from "./EmailForm";
import Products from "./Products";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <main>
      <Welcome />
      <AboutUs />
      <Products />
      <EmailForm />
    </main>
  );
};

export default Main;
