import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import styles from "./SearchList.module.css";

export default function SearchList({ value, clean }) {
  return (
    <List
      style={{
        position: "absolute",
        top: "0",
        zIndex: "1000",
      }}
    >
      {value.map((list) => {
        return (
          <ListItem className={styles.list} key={list.id}>
            <Link
              className={styles.link}
              to={`/search/${
                list.id + "-" + (list.name ?? list.title)?.replaceAll(" ", "-")
              }`}
              state={{ obj: list }}
              onClick={clean}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`}
                />
              </ListItemAvatar>
              <ListItemText>{list.name ?? list.title}</ListItemText>
              <Divider />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
