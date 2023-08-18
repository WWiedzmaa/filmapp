import React from "react";
import styles from "./Footer.module.css";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <OndemandVideoIcon /> Films
        </Link>
      </div>

      <div className={styles.author}>
        <Divider className={styles.divider} />
        <div>designed by Wiedźma </div>
      </div>
    </div>
  );
};

export default Footer;
