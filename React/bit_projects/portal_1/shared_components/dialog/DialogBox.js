import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export const DialogBox = (props) => {
    const { open, portalName } = props

	return (
      <div style={{}}>
        <Dialog open={open}>
					<DialogTitle>{portalName}</DialogTitle>
					<DialogContent>
					<DialogContentText>
						{ "Hey There" }	
					</DialogContentText>
					</DialogContent>
					<DialogActions>
					<Button color="primary" autoFocus>
							Close
					</Button>
					</DialogActions>
        </Dialog>
      </div>
    );
}

export default DialogBox
