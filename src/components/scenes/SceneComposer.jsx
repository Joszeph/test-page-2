import { Grid, Typography } from "@mui/material";
import styles from "./SceneComposer.module.scss";
import Scenes from "./Scenes";
import { useMemo, useState, useEffect } from "react";

export default function SceneComposer({ devices, rooms, selected, onScene }) {
  // Use useMemo to group devices by room
  const devicesByRoom = useMemo(() => {
    const grouped = {};

    devices.forEach(device => {
      if (!grouped[device.roomId]) {
        grouped[device.roomId] = [];
      }

      grouped[device.roomId].push(device);
    });

    return grouped;
  }, [devices]);

  return (
    <div className={classNames(styles["wrapper"])}>
      <Grid container spacing={2}>
      {Object.entries(devicesByRoom).map(([roomId, devices]) => (
        <Grid item xs={12} key={roomId}>
          {/* Display room name */}
          <Typography variant="h6" gutterBottom>
            {rooms.find(room => room.id === parseInt(roomId)).name}
          </Typography>

          {/* Display devices with on/off switch */}
          <Grid container spacing={2}>
            {devices.map(device => (
              <Grid item xs={12} sm={6} key={device.id}>
                <Scenes
                  label={device.name}
                  iconUrl={device.iconUrl}
                  value={selected[device.id] || 'offline'}
                  options={['on', 'off']}
                  onChange={value => onScene(device.id, value)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}