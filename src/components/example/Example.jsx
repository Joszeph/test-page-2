import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Login from "../login/Login";
import User from "../user/User";
import Weather from "../weather/Weather";
import Time from "../time/Time";
import Card from "../card/Card";
import Scenes from "../scenes/Scenes";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
    <Scenes />
      </Container>
    </div>
  );
}
