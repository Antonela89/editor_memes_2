import { useState, useEffect } from 'react';
import { useTextoContext } from '../../Provider/TextProvider.js';


const Texto = () => {
    const [fonts, setFonts] = useState([]);
    //const [textStyles, setTextStyles] = useState({fontFamily: '',}); //Estado del estilo del texto

    const {setTextStyles, updateTexto, selectedFont, updateSelectedFont } = useTextoContext();

    const estilos = {
      fontFamily: selectedFont, // Establece la fuente del texto
  };
  
    useEffect(()=> {
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAiAGjccdo2MrqKeewLPcomuq8qha3k1do')
        .then((response) => {
            if (!response.ok) { // corroborar el estado de la respuesta
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {setFonts(data.items); // Almacenar los datos de la fuente en el estado
          })
          .catch((error) => {
            console.error('Error al cargar las fuentes:', error);
          });
      }, []);

      const handleInputChange = (e) => {
        updateTexto(e.target.value);
      };

      const handleFontChange = (e) => {
        const selectedFont = e.target.value;
        updateSelectedFont(selectedFont);
        setTextStyles({ fontFamily: selectedFont, ...estilos});
      };

      const sizes = [8,9,10,11,12,14,16,18,20,22,24,26,28,36]

      const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setTextStyles({...estilos, fontSize: newSize + 'px'});
      }
  

    return (
      <div style={{width:'100%', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        
        <div style={{width:'100%', padding:'10px'}}>
          <h5 style={{margin:'10px'}}>Texto</h5>
          <input style={{width:'100%'}} onChange={handleInputChange} className="form-control" aria-label=""/>
        </div>
        
        <div style={{width:'100%', display:'flex'}}>
          <div style={{width:'50%', padding:'10px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h5 style={{margin:'10px'}}>Tipografía</h5>
            <select style={{width:'100%', margin:'10px'}} value={selectedFont} onChange={handleFontChange}>
              <option value="">Seleccione una fuente</option>
                {fonts.map((font) => (
                  <option key={font.family} value={font.family}>{font.family}</option>
                ))}
            </select>
          </div>

          <div style={{width:'50%', padding:'10px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h5 style={{margin: '10px'}}>Tamaño</h5>
            <select style={{width:'100%', margin:'10px'}} onChange={handleSizeChange}>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
            </select>
          </div>
        </div>
      </div>
  );
};

export default Texto
