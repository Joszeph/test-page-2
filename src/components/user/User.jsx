import React from "react";
import styles from "./User.module.scss";
import classNames from "classnames";

import { Container, Grid, Avatar, Typography } from "@mui/material";

export default function User({ avatar, name, size }) {
  return (
    <div className={classNames(styles["user-container"])}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} container justifyContent="center" alignItems="center">
          <Avatar alt={name} src={avatar} sx={{ width: size, height: size }}/>
          </Grid>
          <Grid item xs={8} container justifyContent="center" alignItems="center">
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
