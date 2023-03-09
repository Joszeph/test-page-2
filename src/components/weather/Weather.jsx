import React from "react";
import styles from "./Weather.module.scss";
import classNames from "classnames";

import { Container, Grid, Typography } from "@mui/material";

export default function Weather({ degrees, type }) {
  return (
    <div className={classNames(styles["weather-wrapper"])}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} container justifyContent="center" alignItems="center">
          <img className={classNames(styles["image"])} src="/images/sunny.svg" alt="" />
          </Grid>
          <Grid item xs={8} container justifyContent="center" alignItems="left" flexDirection='column'>
            <Typography className={classNames(styles["title"])}>Weather</Typography>
            <Typography variant="h1">22°</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
