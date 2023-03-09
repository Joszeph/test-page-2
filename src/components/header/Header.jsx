import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container, Paper, Grid } from "@mui/material";

export default function Header(props) {
  return (
    <div className={classNames(styles["header-wrapper"])}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Paper className={classNames(styles.left)}>
             {props.left}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classNames(styles.right)}>
            {props.right}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
