import { useState } from "react";
import styles from "./Cameras.module.scss";
import classNames from "classnames";

import { Grid, CardMedia } from "@mui/material";

import Card from "../card/Card";

export default function Cameras({
    cameras= [
       {
          videoUrl:''
       },
    ],
    hasButton
   }) {

    const [selectedCameraIndex, setSelectedCameraIndex] = useState(0);

    const handleCameraClick = ()=>{
        setSelectedCameraIndex(index)
    }

  return (
    <div className={classNames(styles["cameras-wrapper"])}>
      <Grid container spacing={2}>
        {hasButton && (
          <Grid item xs={12} sm={3}>
            <Card variant="outlined" className={classNames(styles.addButtonCard)}>
              <p>+Plus Icon</p>
            </Card>
          </Grid>
        )}
        <Grid item xs={12} sm={hasButton ? 9 : 12}>
          <Grid container spacing={2}>
            {cameras.map((camera, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Card
                  variant="outlined"

                  className={classNames(styles[`cameraCard 
                    ${selectedCameraIndex} === index ? selectedCameraCard : ''
                  `])}
                    onClick={() => handleCameraClick(index)}
                >
                  <video
                    component="video"
                    src={camera.videoUrl}
                    autoplay
                    controls
                  ></video>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
