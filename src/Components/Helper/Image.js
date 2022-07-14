import React, { useState } from "react";
import styles from "./Image.module.css";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const loadHandler = (event) => {
    setSkeleton(false);
    event.target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={loadHandler} alt={alt} className={styles.img} {...props} />
    </div>
  );
};

export default Image;
