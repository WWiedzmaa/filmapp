import React, { useEffect, useState } from "react";
import ApiUtil from "../api/ApiUtil";
import SerialCards from "../Cards/SerialCards";
import CardCarusel from "../components/CardCarusel";
import styles from "./Serial.module.css"

export const Serial = () => {
  const [popSerial, setPopSerial] = useState(null);
  const [topSerial, setTopSerial] = useState(null);
  const [onAirSerial, setOnAirSerial] = useState(null);
  useEffect(() => {
    async function popularSerial() {
      const data = await ApiUtil.getPopoularSerials();
      setPopSerial(data);
    }
    async function topSerials() {
      const data = await ApiUtil.getTopSerials();
      setTopSerial(data);
    }
    async function onTheAirSerial() {
      const data = await ApiUtil.getOnAirSerials();
      setOnAirSerial(data);
    }

    popularSerial();
    topSerials();
    onTheAirSerial();
  }, []);
  
  return (
    <div>
      <div>
        <div className={styles.category}>Popular</div>
        <CardCarusel>
          {popSerial?.results.map((serial) => (
            <SerialCards serial={serial} key={serial.id} />
          ))}
        </CardCarusel>
      </div>
      <div className={styles.category}> TOP</div>
      <CardCarusel>
        {topSerial?.results.map((serial) => (
          <SerialCards serial={serial} key={serial.id} />
        ))}
      </CardCarusel>
      <div className={styles.category}> On The Air</div>
      <CardCarusel>
        {onAirSerial?.results.map((serial) => (
          <SerialCards serial={serial} key={serial.id} />
        ))}
      </CardCarusel>
    </div>
  );
};
