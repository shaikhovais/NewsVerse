/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import styles from "./search.module.css";
import search from "../../Images/search.png";
import getData from "../Functions/getData";
import debounce from "../Functions/debounce";

const Search = (props) => {
  const {
    setData,
    setLoading,
    category,
    setCategory,
    noResult,
    setNoResult,
    pageNumber,
    setPageNumber,
    country
  } = props;
  let query = useRef("");
  
  // function to make 'virat kohli' into 'virat%20kohli' . in url we can't pass spaces 
  function URLify(query) {
    return query.replace(/' '/g, "%20");
  }

  let searchResults = useCallback(async () => {
    query.current = document.getElementById("search-input").value;
    setPageNumber(0);
    setData([]);
    setCategory(""); 
    setNoResult(false);
    query.current = await URLify(query.current);
    await getData(
      "/search",
      "",
      query.current,
      pageNumber,
      setData,
      setNoResult,
      country
    );
  }, []);

  // function to fetch data when page number changes
  useEffect(() => {
    if (category !== "") return;
    (async () => {
      if (noResult) return;
      setLoading(true);
      await getData(
        "/search",
        "",
        query.current,
        pageNumber,
        setData,
        setNoResult,
        country
      );
      setLoading(false);
    })();
  }, [pageNumber]);

  // logic for infinite scrolling
  const handleScroll = debounce(() => {
    if (category !== "") return;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prevNumber) => prevNumber + 1);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Search results when user press 'enter' (better user experience)
  useEffect(() => {
    document
      .getElementById("search-input")
      .addEventListener("keydown", (event) => {
        if (event.repeat) return;
        if (event.code === "Enter") {
          searchResults();
        }
      });
  }, [searchResults]);

  return (
    <div className={styles.search}>
      <input
        type={"text"}
        className={styles.input}
        placeholder="search any topic"
        id="search-input"
      />
      <img
        src={search}
        className={styles.searchImg}
        alt="logo"
        onClick={searchResults}
      />
    </div>
  );
};

export default Search;
