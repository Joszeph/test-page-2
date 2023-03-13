import React from "react";
import styles from "./Devices.module.scss";
import classNames from "classnames";
import { Grid, Chip } from "@mui/material";

import Card from "../card/Card";

export default function Devices({ devices = [] }) {
  return (
    <div className={classNames(styles["devices-wrapper"])}>
      <Grid container spacing={2} sx={{ width: 750 }}>
        {devices.map((device, i) => (
          <Grid item xs={4} key={i}>
            <Card
              title={device.title}
              iconUrl={device.iconUrl}
            />
             <Chip label="!" color="error" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
