import React from 'react'
import styles from './LoginPage.module.scss'
import classNames from "classnames";

import { Container, Paper } from "@mui/material";

import Login from '../../src/components/login/Login';

export default function LoginPage() {
  return (
    <div className={classNames(styles.wrapper)}>
        <Container className={classNames(styles.container)}>
            <Paper className={classNames(styles.paper)}>
                <Login />
            </Paper>
        </Container>
    </div>
  )
}
