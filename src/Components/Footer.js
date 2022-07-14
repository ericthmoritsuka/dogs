import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>
        Dogs. Projeto criado durante o curso da{" "}
        <a href="https://www.origamid.com/">Origamid</a>. Alguns direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
