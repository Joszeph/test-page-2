import { useState } from "react";
import styles from "./Cameras.module.scss";
import classNames from "classnames";

import { Grid } from "@mui/material";

import Card from "../card/Card";

export default function Cameras({ cameras=[], hasButton }) {

    const [activeCard, setActiveCard] = useState(0);

    const wrapperClasses = classNames(styles["cameras-wrapper"], {
        [styles.compressed]: hasButton,
      });

  return (
    <div className={classNames(styles["cameras-wrapper"])}>
      <Grid container>
        <Grid item>
          <video
            autoPlay={true}
            controls
            className={classNames(styles.bigVideo)}
            style={{ width: 200, height: 400 }}
          >
            <source src={cameras[activeCard]?.videoUrl} />
          </video>
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={2}>
            {cameras.map((camera, index) => {
              return (
                <video
                  key={index}
                  onClick={() => {
                    setActiveCard(index);
                  }}
                >
                  <source
                    src={camera.videoUrl}
                    type="video/mp4"
                  />
                </video>
              );
            })}

            <Grid item xs={12}>
              {hasButton ? (
                <div className={styles.add}>
                  <Card iconUrl={"/images/plus.svg"} outlined={true} />
                </div>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
