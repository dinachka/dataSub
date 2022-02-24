
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Card Number" variant="outlined" />
        <TextField id="outlined-basic" label="Expiration Date" variant="outlined" />

        <TextField id="outlined-basic" label="CVV" variant="outlined" />

        <TextField id="outlined-basic" label="Amount" variant="outlined" />
        <Button variant="contained" disabled>
          Оплатить
        </Button>
      </Box>
    </>
  );
}

export default App;
