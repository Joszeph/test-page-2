import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container, Paper, Grid } from "@mui/material";

export default function Header({ right, left }) {
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
             {left}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classNames(styles.right)}>
            {right}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
