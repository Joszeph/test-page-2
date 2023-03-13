import React from "react";
import styles from "./Devices.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";

import Card from "../card/Card";

export default function Devices({
  devices = [
    {
      title: String,
      iconUrl: String,
    },
  ],
}) {
  return (
    <div className={classNames(styles["devices-wrapper"])}>
      <Grid container spacing={2} sx={{ width: 750 }}>
        {devices.map((device, index) => (
          <Grid item xs={4}>
            <Card
              variant={{ on, off, offline }}
              title={device.title}
              iconUrl={device.iconUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
