import { useEffect, useState } from "react";
import styles from "./Time.module.scss";
import classNames from "classnames";

import { Container, Typography } from "@mui/material";

export default function Time() {

const [time, setTime] = useState(new Date())

useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={classNames(styles["time-wrapper"])}>
      <Container>
        <Typography className={classNames(styles["title"])}>Time</Typography>
        <Typography variant="h1" className={classNames(styles["time"])}>{time.toLocaleTimeString()}</Typography>
      </Container>
    </div>
  );
}
