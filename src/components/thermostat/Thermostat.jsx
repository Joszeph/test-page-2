import { useState } from "react";

import styles from "./Thermostat.module.scss";
import classNames from "classnames";
import { red } from "@mui/material/colors";

import CircularProgress from "@mui/material/CircularProgress";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { IconButton, Stack, Typography } from "@mui/material";

import { ComposedChart, Line } from "recharts";

export default function Thermostat({
  data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ],
}) {
  const color = red[800];

  const [currentTemp, setCurrentTemp] = useState(15);

  return (
    <div className={classNames(styles["wrapper"])}>
      <div style={{ marginLeft: "17%" }}>
        <CircularProgress
          variant="determinate"
          size={433}
          thickness={3}
          className={classNames(styles.progressOne)}
          style={{
            color: red[700],
            position: "absolute",
            transform: "rotate(180deg)",
          }}
          value={50}
        />
        <CircularProgress
          variant="determinate"
          size={433}
          thickness={3}
          className={classNames(styles.progressTwo)}
          style={{
            position: "absolute",
            color: "white",
            transform: "rotate(180deg)",
          }}
          value={((currentTemp - 15) * 50) / 35}
        />
        <div className={classNames(styles.tempBtns)} style={{}}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <div className={classNames(styles.thermostat)}>
              <IconButton
                className={classNames(styles.therBtn)}
                onClick={() =>
                  setCurrentTemp(
                    currentTemp == 15 ? currentTemp : currentTemp - 1
                  )
                }
              >
                <RemoveCircleOutlinedIcon fontSize="large" />
              </IconButton>
              <Typography
                variant="h1"
                className={classNames(styles.currentTemp)}
              >
                {currentTemp}°
              </Typography>
              <IconButton
                className={classNames(styles.therBtn)}
                onClick={() =>
                  setCurrentTemp(
                    currentTemp == 50 ? currentTemp : currentTemp + 1
                  )
                }
              >
                <AddCircleOutlinedIcon fontSize="large" />
              </IconButton>
            </div>
          </Stack>
        </div>
      </div>
      <div className={classNames(styles.chart)}>
        <Typography
          variant="h"
          style={{
            color: "white",
            position: "absolute",
            marginTop: "150px",
            marginLeft: "5px",
          }}
        >
          Temperature Graph
        </Typography>
        <ComposedChart
          width={595}
          height={190}
          data={data}
          style={{
            position: "absolute",
            marginTop: "160px",
            marginLeft: "5px",
          }}
        >
          <Line stroke="#ffffff" type="monotone" dataKey="temperature" />
        </ComposedChart>
      </div>
    </div>
  );
}
