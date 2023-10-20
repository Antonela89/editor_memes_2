import React from 'react';
import  useTextContext  from '../../Provider/TextProvider';

const Color = () => {
  
  const { selectedColor, setSelectedColor, bold, setBold, underline, setUnderline, italic, setItalic } = useTextContext();

//   const estilos = {
//     color: selectedColor, // Establece el color del texto
//     fontWeight: bold ? 'bold' : 'normal', // Negrita del texto
//     textDecoration: underline ? 'underline' : 'none', // Subrayado del texto
//     fontStyle: italic ? 'italic' : 'normal' // Cursiva del texto
// };
  
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleBoldChange = (e) => {
    setBold(e.target.checked);
  };

  const handleUnderlineChange = (e) => {
    setUnderline(e.target.checked);
  };

  const handleItalicChange = (e) => {
    setItalic(e.target.checked);
  };

  return (
    <div style={{width:'100%', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h3 style={{margin: '10px'}}>Color del texto</h3>
      <input style={{margin: '10px'}} type="color" value={selectedColor} onChange={handleColorChange}/>
      {/*el color seleccionado debe afectar el color del p qu ira en el meme*/}

      
        <h3 style={{margin: '10px'}}>Efectos del texto</h3>
      <div style={{width:'90%', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <input style={{margin: '10px'}} type="checkbox" id='negrita' checked={bold} onChange={handleBoldChange} />
        <label style={{margin: '10px'}} htmlFor='negrita'>Negrita</label>
        <input style={{margin: '10px'}} type="checkbox" id='subrayado' checked={underline} onChange={handleUnderlineChange}/>
        <label style={{margin: '10px'}} htmlFor='subrayado'>Subrayado</label>
        <input style={{margin: '10px'}} type="checkbox" id='cursiva' checked={italic} onChange={handleItalicChange}/>
        <label style={{margin: '10px'}} htmlFor='cursiva'>Cursiva</label>
      </div>
    </div>
  );
}

export default Color