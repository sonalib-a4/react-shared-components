import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import ColorBox from '@bit/afourtech.shared_components.color'
import DialogBox from '@bit/afourtech.shared_components.dialog'

const Manager = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [name, setName] = useState("")

  return (
    <div>
      <Container component="main" maxWidth="xs" margin="5">
        <CssBaseline />
        <Typography >
          This is manager acccount
        </Typography>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 1
          }}
        >
          <TextField
            required={true}
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            onChange={e => setName(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            size="medium"
            onClick={() => { console.log("I am clicked");  setIsClicked(true) } }
          >
            Login
          </Button>
        </Box>
      </Container>
         
      {/* <ColorBox /> */}
      <DialogBox open={isClicked} name={name} />
    </div>
  )
}

export default Manager
