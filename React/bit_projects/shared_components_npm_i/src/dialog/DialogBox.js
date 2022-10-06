import React from "react";
import { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from  "@material-ui/core/TextField";

export const DialogBox = (props) => {
    const { open, name } = props
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => {
      console.log("I am in closemodal, ==>", props.open )
      setModalOpen(false)
    }

    useEffect(() => {
      console.log("I am in use effect, ==>", props.open )
      setModalOpen(props.open)
    }, [props.open]);

    return (
      <div style={{}}>
        <Dialog open={modalOpen}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
        <TextField
            required={true}
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            value={name}
          />
        <DialogContentText>
                Hi there I am {name}
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button color="primary" onClick={closeModal}>
                Close
        </Button>
        </DialogActions>
        </Dialog>
      </div>
    );
}

export default DialogBox
