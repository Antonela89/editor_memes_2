import React, {useState} from 'react'

const Alineacion = () => {
  const [horizontalAlignment, setHorizontalAlignment] = useState('left'); // Inicializamos en "izquierda"
  const [verticalAlignment, setVerticalAlignment] = useState('top'); // Inicializamos en "superior"

  const handleHorizontalAlignmentChange = (alignment) => {
    setHorizontalAlignment(alignment);
  };

  const handleVerticalAlignmentChange = (alignment) => {
    setVerticalAlignment(alignment);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3 style={{ margin: '10px' }}>Horizontal</h3>
      <div style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input
          style={{ margin: '10px' }}
          type="radio"
          id="izquierda"
          name="horizontalAlignment"
          value="izquierda"
          checked={horizontalAlignment === 'left'}
          onChange={() => handleHorizontalAlignmentChange('left')}
        />
        <label style={{ margin: '10px' }} htmlFor="izquierda">
          Izquierda
        </label>
        <input
          style={{ margin: '10px' }}
          type="radio"
          id="centrada"
          name="horizontalAlignment"
          value="centrada"
          checked={horizontalAlignment === 'center'}
          onChange={() => handleHorizontalAlignmentChange('center')}
        />
        <label style={{ margin: '10px' }} htmlFor="centrada">
          Centrada
        </label>
        <input
          style={{ margin: '10px' }}
          type="radio"
          id="derecha"
          name="horizontalAlignment"
          value="derecha"
          checked={horizontalAlignment === 'rigth'}
          onChange={() => handleHorizontalAlignmentChange('rigth')}
        />
        <label style={{ margin: '10px' }} htmlFor="derecha">
          Derecha
        </label>
      </div>

      <h3 style={{ margin: '10px' }}>Vertical</h3>
      <div style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input
          style={{ margin: '10px' }}
          type="radio"
          id="superior"
          name="verticalAlignment"
          value="superior"
          checked={verticalAlignment === 'top'}
          onChange={() => handleVerticalAlignmentChange('top')}
        />
        <label style={{ margin: '10px' }} htmlFor="superior">
          Superior
        </label>
        <input
          style={{ margin: '10px' }}
          type="radio"
          id="centradaV"
          name="verticalAlignment"
          value="centrada"
          checked={verticalAlignment === 'center'}
          onChange={() => handleVerticalAlignmentChange('center')}
        />
        <label style={{ margin: '10px' }} htmlFor="centradaV">
          Centrada
        </label>
        <input
          style={{ margin: '10px' }}
          type="radio"
          id="inferior"
          name="verticalAlignment"
          value="inferior"
          checked={verticalAlignment === 'bottom'}
          onChange={() => handleVerticalAlignmentChange('bottom')}
        />
        <label style={{ margin: '10px' }} htmlFor="inferior">
          Inferior
        </label>
      </div>
    </div>
  );
};

export default Alineacion
