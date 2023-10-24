import  { useEffect, useState, React } from 'react';
import './App.css';
import Boton from './components/Inputs/Boton';
import Input from './components/Inputs/Input';
import Seleccion from './components/Inputs/Seleccion';
import Visualizador from './components/Visualizador/Visualizador'
import Edicion from './components/Edicion/Edicion';


function App() {

  const [font, setFonts] = useState([])

  const sizes = [8,9,10,11,12,14,16,18,20,22,24,26,28,36]

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


  return (
    <div className="App">
      <Boton contenido={'borrar'}/>

      <Boton variante={'contained'} contenido={'descargar'}/>

      <Seleccion variable = {'tipografia'} array = {font.map(item => item.family)}/>

      <Seleccion variable = {'fuente'} array = {sizes}/>

      <Input variante = {'texto'}/>
      <Visualizador/>
      <Edicion/>
    </div>
  );
}

export default App;
