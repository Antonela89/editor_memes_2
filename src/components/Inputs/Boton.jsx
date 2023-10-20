import React from 'react'
import Button from '@mui/material/Button';

const Boton = ({variante = 'outlined', contenido}) => {
  return (
    <Button variant={variante}>{contenido}</Button>   
  )
}

export default Boton