
import styles from "./Rooms.module.scss";
import classNames from "classnames";

import { Grid, Typography } from "@mui/material";

import Card from '../card/Card'

export default function Rooms({rooms=[{
    "name": "Living Room",
    "type": "living-room",
    "id": 1,
    "propertyId": 1,
    "userId": 1
  },
  {
    "name": "Bedroom",
    "type": "bedroom",
    "id": 2,
    "propertyId": 1,
    "userId": 1
  },
  {
    "name": "Bathroom",
    "type": "bathroom",
    "id": 3,
    "propertyId": 1,
    "userId": 1
  },
  {
    "name": "Toilet",
    "type": "toilet",
    "id": 4,
    "propertyId": 1,
    "userId": 1
  },
  {
    "name": "Patio",
    "type": "patio",
    "id": 5,
    "propertyId": 1,
    "userId": 1
  }]}) {
  return (
  <div className={classNames(styles['rooms-wrapper'])}>
    <Grid container>
        {rooms.map((room)=>(
            <Grid item xs={12} >
                <Card {...room}/>
            </Grid>
        ))}
    </Grid>
  </div>
  )
}
