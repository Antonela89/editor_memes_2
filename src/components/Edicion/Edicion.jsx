import React, {useState} from 'react';
import Texto from './Texto';
import Color from './Color';
import Alineacion from './Alineacion';
import Descarga from '../Descarga/Descarga';
import { Stepper, StepLabel, Button, Step} from '@mui/material';


const pasos = ['Texto', 'Color', 'Alineación', 'Descarga'];

function mostrarPasoActual(paso) {
switch (paso) {
    case 0:
        return <Texto/>;
    case 1:
        return <Color />;
    case 2:
        return <Alineacion />;
    case 3:
        return <Descarga/>;
    default:
        throw new Error('Unknown step');
    }
}

const Edicion = () => {

    const [pasoActual, setPasoActual] = useState(0);

    return (
        <div style={{width:'390px', height: '300px', border: '1px solid blue', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Stepper style={{width:'90%', marginTop:'25px'}} activeStep={pasoActual}>
            {pasos.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
            </Stepper>
            <div>
                {mostrarPasoActual(pasoActual)}
                <div>
                    {pasoActual !== 0 && (<Button onClick={()=>setPasoActual(pasoActual - 1)}>Anterior</Button>)}
                    {pasoActual === pasos.length - 1 ? ('') : (<Button style={{ margin: '10px' }} onClick={() => setPasoActual(pasoActual + 1)}>Próximo</Button>)}
                </div>
            </div>
        </div>
    )
}

export default Edicion
