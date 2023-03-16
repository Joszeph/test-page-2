import styles from "./SceneComposer.module.scss";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";

import Scenes from "./Scenes";
import { useMemo, useState } from "react";

export default function SceneComposer({
  devices = [],
  rooms = [],
  selected,
  onScene,
}) {
  const [status, setStatus] = useState("off");

  const group = useMemo(() => {
    let id = 1;
    const groupedDevices = rooms.map((room) => {
      const sortedCards = devices.filter(
        (device) => device?.roomId === room?.id
      );
      const cards = [];
      sortedCards.forEach((device) => {
        cards.push(
          {
            ...device,
            title: "ON",
            id: id++,
            status: "on",
          },
          {
            ...device,
            title: "OFF",
            id: id++,
            status: "off",
          }
        );
      });

      return {
        id: room.id,
        name: room.name,
        cards: cards,
      };
    });

    return groupedDevices;
  }, [devices, rooms]);

  return (
    <div className={classNames(styles.wrapper)}>
      <Grid container direction="column" spacing={4} className={styles.container}>
        {group.map((item, index) => {
          if (group[index].cards.length) {
            return (
              <Grid item key={index}>
                <Typography variant="h4">{item.name}</Typography>
                <Scenes cards={item} selected={selected} onScene={onScene} />
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  );
}
