/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./topics.module.css";
import SingleTopic from "../SingleTopic/SingleTopic";

const Topics = (props) => {
  const {
    setData,
    setCategory,
    setLoading,
    setNoResult,
    country,
  } = props;

  let topicsArray = [
    {
      country: "us",
      topics: [
        "World",
        "Business",
        "Entertainment",
        "Health",
        "Politics",
        "Science",
        "Technology",
        "Sports",
      ],
    },
    {
      country: "in",
      topics: [
        "World",
        "India",
        "Business",
        "Entertainment",
        "Lifestyle",
        "Politics",
        "Science & Technology",
        "Sports",
      ],
    },
    {
      country: "jp",
      topics: [
        "World",
        "Japan",
        "Business",
        "Entertainment",
        "Lifestyle",
        "Politics",
        "Science & Technology",
        "Sports",
      ],
    },
    {
      country: "gb",
      topics: [
        "World",
        "United Kingdom",
        "Business",
        "Entertainment",
        "Health",
        "Politics",
        "Science & Technology",
        "Sports",
      ],
    },
    {
      country: "ca",
      topics: [
        "World",
        "Canada",
        "Business",
        "Entertainment",
        "Lifestyle",
        "Politics",
        "Science & Technology",
        "Sports",
      ],
    },
    {
      country: "cn",
      topics: [
        "World",
        "China",
        "Business",
        "Entertainment",
        "Auto",
        "Military",
        "Science & Technology",
        "Sports",
      ],
    },
    {
      country: "au",
      topics: [
        "World",
        "Australia",
        "Business",
        "Entertainment",
        "Politics",
        "Sports",
      ],
    },
  ];
  const [topics, setTopics] = useState(topicsArray[0].topics);

  // when we select a new country, we display topics as per the new country
  useEffect(() => {
    getTopics();
  }, [country]);

  function getTopics() {
    let temp = topicsArray.filter((topic) => topic.country === country)[0].topics;
    setTopics(temp);
  }

  return (
    <div className={styles.topics}>
      {topics &&
        topics.map((topic) => {
          return (
            <SingleTopic
              name={topic}
              key={topic}
              setData={setData}
              setCategory={setCategory}
              country={country}
              setLoading={setLoading}
              setNoResult={setNoResult}
            />
          );
        })}
    </div>
  );
};

export default Topics;
