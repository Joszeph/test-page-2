import React from "react";
import styles from "./Room.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";

import Navigation from "../../src/components/navigation/Navigation";
import Header from "../../src/components/header/Header";
import Devices from "../../src/components/devices/Devices";
import Cameras from "../../src/components/cameras/Cameras";

export default function Room({}) {

    const devices = [
        {
            "title": "ON",
            "iconUrl": '../images/alarm-clock.svg'
        },
        {
            "title": "OFFLINE",
            "iconUrl": '../images/alarm-clock.svg'
        },
        {
            "title": "OFF",
            "iconUrl": '../images/alarm-clock.svg'
        },
        {
            "title": "OFF",
            "iconUrl": '../images/alarm-clock.svg'
        }
    ]

    const onlineDevices = devices.filter(device => device.title.toLowerCase() != "offline").length;

  return (
    <Container className={styles.container}>
      <Grid container className={styles["grid-container"]}>
        <Grid item>
          <Navigation />
        </Grid>
        <Grid item className={styles["grid-item"]}>
          <Header
            left={<Typography variant="h1">Living Room</Typography>}
            right={
              <Grid container style={{ "text-align": "right" }}>
                <Grid item xs={11}>
                  <Typography variant="h6" color="#5c2fcf">
                    Devices
                  </Typography>
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="h2" color="initial">
                    {onlineDevices}
                  </Typography>
                </Grid>
              </Grid>
            }
          />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid item>
            <Devices devices={devices}/>
          </Grid>
          <Grid item paddingTop="130px">
            <Cameras />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
