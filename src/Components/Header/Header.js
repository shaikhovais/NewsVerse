import React from "react";
import styles from "./header.module.css";
import logo from "../../Images/Logo.png";
import Dropdown from "../Dropdown/Dropdown";

const Header = (props) => {
  const { setCountry, setData, setLoading, setNoResult } = props;

  // header will stick on top of screen and when user clicks on header he will be scrolled to to top of the page
  let scrollTop = () => window.scrollTo(0, 0);

  return (
    <div className={styles.heading} onClick={scrollTop}>
      <img src={logo} className={styles.logo} alt="logo" />
      <Dropdown setCountry={setCountry} setData={setData} setLoading={setLoading} setNoResult={setNoResult}/>
    </div>
  );
};

export default Header;
