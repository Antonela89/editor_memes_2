import React from 'react'
//import { useTextoContext } from '../../Provider/TextProvider';

const Img = ({selectedImage}) => {

  //const { texto, selectedColor, selectedFont, bold, underline, italic } = useTextoContext();

//   const estilos = {
//       color: selectedColor, // Establece el color del texto
//       fontFamily: selectedFont, // Establece la fuente del texto
//       fontWeight: bold ? 'bold' : 'normal', // Negrita del texto
//       textDecoration: underline ? 'underline' : 'none', // Subrayado del texto
//       fontStyle: italic ? 'italic' : 'normal' // Cursiva del texto
//   };
  
  return (
    <div style={{width: '100%'}} id='exportar'>
      <img style={{width: '100%'}}
        src={selectedImage.url}
        alt={selectedImage.name}
        loading="lazy" />

      {/* <p style={estilos}>{texto}</p> */}
      <p></p>
    </div>
  )
}

export default Img