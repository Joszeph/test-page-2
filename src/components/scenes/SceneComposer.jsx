import { useMemo, useState, useEffect } from "react";

import styles from "./SceneComposer.module.scss";
import classNames from "classnames";
import Scenes from "./Scenes";

import { Grid, Typography } from "@mui/material";

export default function SceneComposer({
  devices = [],
  rooms = [],
  selected,
  onScene,
}) {
  const [roomStates, setRoomStates] = useState({});

  const devicesByRoom = useMemo(
    () =>
      rooms.reduce(
        (acc, room) => ({
          ...acc,
          [room.id]: devices.filter((device) => device.roomId === room.id),
        }),
        {}
      ),
    [devices, rooms]
  );

  const handleDeviceStateChange = (roomId, deviceId, state) => {
    setRoomStates((prevRoomStates) => ({
      ...prevRoomStates,
      [roomId]: {
        ...prevRoomStates[roomId],
        [selected]: {
          ...(prevRoomStates[roomId]?.[selected] || {}),
          [deviceId]: state,
        },
      },
    }));
  };

  useEffect(() => {
    setRoomStates({});
  }, [selected]);

  return (
    <div className={styles.wrapper}>
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid item xs={12} key={room.id}>
            <Typography variant="h5" className={styles.roomTitle}>
              {room.name}
            </Typography>
            <Grid container spacing={2}>
              {devicesByRoom[room.id].map((device) => (
                <Grid item xs={6} sm={3} key={device.id}>
                  <Scenes
                    label={device.name}
                    on={roomStates[room.id]?.[selected]?.[device.id]}
                    off={!roomStates[room.id]?.[selected]?.[device.id]}
                    offline={!roomStates[room.id]?.[selected]?.[device.id]}
                    onScene={onScene
                    }
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
