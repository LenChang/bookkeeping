import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { OpenNewExpContext } from "../App";

export default function NewExpense() {
  const { open, setOpen } = useContext(OpenNewExpContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Saving data into DB
    // ....
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      {/* <DialogContent>
  <DialogContentText>
    To subscribe to this website, please enter your email address here. We
    will send updates occasionally.
  </DialogContentText>
  <TextField
    autoFocus
    margin="dense"
    id="name"
    label="Email Address"
    type="email"
    fullWidth
    variant="standard"
  />
</DialogContent> */}
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
