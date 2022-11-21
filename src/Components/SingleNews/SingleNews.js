import React from "react";
import styles from "./singleNews.module.css";
import noImage from "../../Images/noImage.jpeg";

const SingleNews = (props) => {
  let { name, image, url, description, provider, datePublished } = props.news;

  if (image !== undefined) {
    image = image.thumbnail.contentUrl;
    image += '&h=300&p=0';
  }
  provider = provider[0].name;

  return (
    <a
      className={styles.card}
      href={url}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <img src={image || noImage} alt="Failed to load" />
      <div className={styles.cardInfo}>
        <h5>{name}</h5>
        <p>Author: {provider || "N/A"}</p>
        <p>Published at : {datePublished.substring(0, 10)}</p>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default SingleNews;
