import * as React from 'react';
import Rating from '@mui/material/Rating';
export default function AxiosRating() {
  const [value, setValue] = React.useState(2);

  return (

    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
