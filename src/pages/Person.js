import React, { useEffect, useState } from "react";
import ApiUtil from "../api/ApiUtil";
import PersosnsCards from "../Cards/PersosnsCards";
import styles from "./Person.module.css";
import _ from 'lodash';

export const Persons = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function persons() {
      const data = await ApiUtil.getPersons();
      setPersons(data);
    }
    persons();
  }, []);
  return (
    <div>
      <div className={styles.category}> The most famous actors </div>
      <div className={styles.card}>
        {_.sortBy(persons?.results, ["name"]).map((person) => (
          <PersosnsCards key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};
