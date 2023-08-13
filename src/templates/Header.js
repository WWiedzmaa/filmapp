import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchList from "../Cards/SearchList";
import ApiUtil from "../api/ApiUtil";

const Header = (movie) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    console.log(e);
    if (!myRef.current?.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [myRef]);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    async function search() {
      const data = await ApiUtil.getSearch(query);
      if (query !== "") {
        setData(data.results);
      }
    }
    search();
  }, [query]);

  function clean() {
    setData([]);
    setQuery("");
  }

  return (
    <div>
      <div className={styles.root}>
        <div className={styles.logo}>
          <OndemandVideoIcon /> Films{" "}
        </div>
        <div className={styles.links}>
          <Link to={"/"}> Home Page</Link>
          <Link to={"/movies"}> Movies </Link>
          <Link to={"/serials"}> Serials </Link>
          <Link to={"/persons"}> Person </Link>
        </div>
        {isVisible && (
            <div className={styles.listAbsolut}>
              <SearchList clean={clean} value={data} />
            </div>
          )}
      </div>
      <div className={styles.search}>
        <img
          className={styles.img}
          src="https://img.freepik.com/darmowe-zdjecie/pusta-sala-kinowa-z-krzeslami_651396-2891.jpg" />
        <div className={styles.bnt} ref={myRef}>
          <TextField
            label={
              <div className={styles.lable}>
                <SearchIcon />
                <span>Search</span>
              </div>
            }
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            size="small"
            onClick={() => setIsVisible(true)}  
            fullWidth
            InputProps={{
                classes: {
                  notchedOutline: styles.notchedOutline
                }
              }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
