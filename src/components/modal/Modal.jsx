import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";

export default function Modal({
  open,
  title,
  buttonText,
  handleSubmit,
  handleClose,
  children
}) {
  return (
    <div>
      <Dialog className={classNames(styles["dialog-wrapper"])} open={open} handleClose={handleClose}>
        <DialogTitle className={classNames(styles["modal-title"])}>
          {title}
        </DialogTitle>
        <DialogContent className={classNames(styles["modal-content"])}>
          {children}
        </DialogContent>
        <Button onClick={handleSubmit}>{buttonText}</Button>
      </Dialog>
    </div>
  );
}
