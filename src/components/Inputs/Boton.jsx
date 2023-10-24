import React from 'react'
import Button from '@mui/material/Button';

const Boton = ({variante = 'outlined', contenido}) => {
  return (
    <Button sx={{m: 1}} variant={variante}>{contenido}</Button>   
  )
}

export default Boton