/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./dropdown.module.css";
import getData from "../Functions/getData";

const Dropdown = (props) => {
  const { setCountry, setData, setLoading, setNoResult } = props;
  let flags = ["🇺🇸", "🇮🇳", "🇯🇵", "🇬🇧", "🇨🇦",  "🇨🇳", "🇦🇺"];
  let countryValues = [
    "us",
    "in",
    "jp",
    "gb",
    "ca",
    "cn",
    "au",
  ];
  let countryNames = [
    "United States",
    "India",
    "Japan",
    "United Kingdom",
    "Canada",
    "China",
    'Australia'
  ];

  // In mobile devices instead of flags and full name only fags will be visible
  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     let options = document.querySelectorAll("option");
  //     options.forEach((option, index) => {
  //       option.innerText = flags[index];
  //     });
  //   }
  // }, []);

  async function dropdownHandler(e) {
    setData([]);
    document.getElementById("search-input").value = "";
    setCountry(e.target.value);
    fetchData(e.target.value)
  }

  async function fetchData(countryName) {
    setLoading(true);
    await getData(
      "",
      'World',
      "",
      0,
      setData,
      setNoResult,
      countryName
    );
    setLoading(false)
  }

  useEffect(() => {
    fetchData('us');
  },[])

  return (
    <div className={styles.dropdown}>
      <label>Select Region</label>
      <select onChange={dropdownHandler} id="select-1">
        {flags.map((flag, index) => {
          return (
            <option
              className={styles.countryOption}
              key={index}
              value={countryValues[index]}
            >
              {flag} {countryNames[index]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
