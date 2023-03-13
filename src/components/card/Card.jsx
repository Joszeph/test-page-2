import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";

import { Card as CardEl, CardContent, Typography } from "@mui/material";

export default function Card({ iconUrl = "", outlined = false, onClick, title, variant }) {
  return (
    <div className={classNames(styles.card)}>
      <CardEl
        variant={outlined ? "outlined" : ""}
        sx={{
          border: "3px solid #7441F3",
          borderColor: "primary.main",
        }}
        className={classNames(styles.cardEl)}
      >
        {iconUrl && (
          <CardContent>
            <img src={iconUrl} height={120} width={120} />
            {title ? <Typography>{title}</Typography> : ''}
          </CardContent>
        )}
      </CardEl>
    </div>
  );
}
