import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Seleccion = ({variable, array}) => {

  const [estado, setEstado] = React.useState('');

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  
   // Asegúrate de que array sea un array y no esté vacío antes de mapearlo
   const menuItems = Array.isArray(array) && array.length > 0 ? (
    array.map((element, i) => (
      <MenuItem key={i} value={element}>
        {element}
      </MenuItem>
    ))
  ) : null;

  return (
    <Box sx={{ minWidth: 120, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{variable}</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={estado}
          label={variable}
          onChange={handleChange}
        >

          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Seleccion