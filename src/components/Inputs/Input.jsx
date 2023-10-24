import React from 'react'
import {Box, FormControl, TextField} from '@mui/material';

const Input = ({variante}) => {
  return (
    <Box sx={{ minWidth: 120, m: 1 }}>
        <FormControl fullWidth>
            <TextField id={variante} label={variante} variant='outlined' />
        </FormControl>    
    </Box>
      
  );
}

export default Input