import styles from "./Dashboard.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";

import Header from "../src/components/header/Header";
import Example from "../src/components/example/Example";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";
import Navigation from "../src/components/navigation/Navigation";
import Thermostat from "../src/components/thermostat/Thermostat";
import Scenes from "../src/components/scenes/Scenes";
import Cameras from "../src/components/cameras/Cameras";
import Energy from "../src/components/energy/Energy";
import Rooms from "../src/components/rooms/Rooms";

export default function Dashboard() {
  return (
    <Container className={styles.container}>
      <Grid container className={styles["grid-container"]}>
        <Grid item>
          <Navigation />
        </Grid>
        <Grid item className={styles["grid-item"]}>
          <Header
            left={<User />}
            right={
              <>
                <Weather />
                <Time />
              </>
            }
          />
        </Grid>
        <Grid container direction="row" className={styles.firstRow}>
          <Grid item>
            <Typography variant="h4" color="initial" >
              Thermostat
            </Typography>
            <Thermostat />
          </Grid>
          <Grid item >
            <Typography variant="h4" color="initial" >
              Scenes
            </Typography>
            <Scenes />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Cameras />
          </Grid>
          <Grid item paddingTop="130px">
            <Energy />
          </Grid>
        </Grid>
        <Grid item paddingLeft="200px">
          <Rooms />
        </Grid>
      </Grid>
    </Container>
  );
}
