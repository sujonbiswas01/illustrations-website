import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

export default function HoverRating() {


  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
        <Checkbox/>
        <Checkbox  defaultChecked color="success" />
      
    </Box>
  );
}