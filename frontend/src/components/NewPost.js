import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >


        <TextField
          id="filled-textarea"
          label="Title"
          multiline
          variant="filled"
        />
        <div>
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="filled"
          />
        </div>

      </Box>
    </div>
  );
}
