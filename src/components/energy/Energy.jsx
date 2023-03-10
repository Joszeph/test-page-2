import { useState } from "react";
import styles from "./Energy.module.scss";
import classNames from "classnames";

import { Grid, Typography, Select, MenuItem } from "@mui/material";

import { ComposedChart, CartesianGrid, Line, Area, XAxis } from "recharts";

export default function Energy({
  data = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
  ],
}) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">Energy</Typography>
        </Grid>
        <Grid item xs={6}>
          <Select
            labelId="select"
            id="simple-select"
            value={1}
            label="This week"
            // onChange={handleChange}
          >
            <MenuItem value={1} label="This week">
              This Week
            </MenuItem>
            <MenuItem value={2} label="This day 1">
              This day 1
            </MenuItem>
            <MenuItem value={3} label="This day 2">
              This day 2
            </MenuItem>
            <MenuItem value={4} label="This day 3">
              This day 3
            </MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <ComposedChart width={803} height={389} data={data}>
            <XAxis dataKey="hour" />
            <CartesianGrid strokeDasharray="3" />
            <Area
              type="monotone"
              dataKey="temperature"
              fill="#e150a6"
              stroke="#c33c8c"
            />
            <Line type="monotone" dataKey="temperature" stroke="#c33c8c" />
          </ComposedChart>
        </Grid>
      </Grid>
    </div>
  );
}
