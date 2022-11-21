import { React } from "react";
import styles from "./news.module.css";
import SingleNews from "../SingleNews/SingleNews";

const News = (props) => {
  let data = props.data;

  return (
    <>
      <div className={styles.news}>
        {data &&
          data.map((news, index) => {
            return <SingleNews news={news.article} key={news.id} />;
          })}
      </div>
    </>
  );
};

export default News;
