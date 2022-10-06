import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

const User = () => {

  const [name, setName] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <Container component="main" maxWidth="xs" margin="5">
        <CssBaseline />
        <Typography >
          This is User acccount
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
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
              onClick={() => setIsClicked(true) }
            >
              Login
            </Button>
        </Box>
      </Container>
    </div>
  )
}

export default User
