import styles from "./Header.module.scss";
import classNames from "classnames";

import { Container, Paper, Stack } from "@mui/material";

export default function Header({ left, right }) {
  return (
      <div className={styles['header-wrapper']}>
            <Paper className={styles['paper-wrapper']}>
                <div className={styles.left}>{left}</div>
                <div className={styles.right}>{right}</div>
            </Paper>
        </div>
  );
}
