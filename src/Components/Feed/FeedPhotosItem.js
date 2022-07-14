import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../Helper/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const clickHandler = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={clickHandler}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
