import { React, useEffect } from "react";
import styles from "./singleTopic.module.css";
import getData from "../Functions/getData";

const SingleTopic = (props) => {
  let {
    name,
    setCategory,
    setData,
    setNoResult,
    country,
    setLoading
  } = props;

  useEffect(() => {
    let topics = document.querySelectorAll(".topics");
    topics.forEach((topic) => topic.classList.remove(styles.selected));
    document.querySelector(".topics").classList.add(styles.selected);
  }, []);

  // when topic is changed we add 'selected' class to the current topic, reset all the data and make new api call
  let topicChangeHandler = async (event) => {
    let topics = document.querySelectorAll(".topics");
    topics.forEach((topic) => topic.classList.remove(styles.selected));
    event.target.classList.add(styles.selected);
    document.getElementById("search-input").value = "";
    console.log('helloo');
    setCategory(name);
    setData([]);
    setNoResult(false);
    setLoading(true);
    await getData(
      "",
      name,
      "",
      0,
      setData,
      setNoResult,
      country
    );
    setLoading(false);
  };

  return (
    <h1 className={`${styles.topic} topics`} onClick={topicChangeHandler}>
      {name}
    </h1>
  );
};

export default SingleTopic;
