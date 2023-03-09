import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container, Paper, Stack } from "@mui/material";

export default function Header({ left, right }) {
  return (
    <div className={classNames(styles["header-wrapper"])}>
      <Container maxWidth="lg">
        <Paper className={classNames(styles.paper)}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={12}   
          >
            <Container maxWidth="sm" className={classNames(styles.left)}>
              {left}
            </Container>
            <Container maxWidth="sm" className={classNames(styles.right)}>
              {right}
            </Container>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}
