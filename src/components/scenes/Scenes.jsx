import React from "react";
import styles from "./Scenes.module.scss";
import classNames from "classnames";

import { Grid } from "@mui/material";

import Card from "../card/Card";

export default function Scenes({
  cards = [
    {
      id: 1,
      name: "Lightbulb",
      iconUrl: "/images/plug.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 2,
      name: "Air Conditioner",
      iconUrl: "/images/plug.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 3,
      name: "Eletctric Switch",
      iconUrl: "/images/bulb.svg",
      roomId: 1,
      userId: 1,
    },
    {
      id: 4,
      name: "Water Heater",
      iconUrl: "/images/bulb.svg",
      roomId: 3,
      userId: 1,
    },
  ],
  selected=0
}) {
  return (
    <div className={classNames(styles["scenes-container"])}>
      <Grid container columnSpacing={{ xs: 1}}>
        {cards.map((card) => (
          <Grid item xs={3}>
            <Card
              key={card.id}
              iconUrl={card?.iconUrl}
              outlined={card?.outlined}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}