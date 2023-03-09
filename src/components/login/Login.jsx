import styles from "./Login.module.scss";
import classNames from "classnames";

import { Button, TextField, Container, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { InputAdornment } from "@mui/material";

export default function Login() {
  return (
    <div className={classNames(styles["login-form"])}>
      <TextField
        id="username"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <TextField
        id="password"
        label=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <Button variant="contained" >LOGIN</Button>
    </div>
  );
}
