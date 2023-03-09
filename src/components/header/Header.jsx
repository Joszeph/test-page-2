import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container, Paper, Grid } from "@mui/material";

export default function Header({ left, right }) {
  return (
    <div className={classNames(styles["header-wrapper"])}>
      <Container maxWidth="lg" >
        <Grid container spacing={0} justifyContent="space-between" alignItems="center">
          <Grid item xs={2}>
            <Paper elevation={0} >
              <div className={classNames(styles["left"])}>{left}</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} >
              <div className={classNames(styles["right"])}>{right}</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
