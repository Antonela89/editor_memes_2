import { ImageList, ImageListItem } from '@mui/material';
import { useState, useEffect} from "react";
import Img from './Img';

const Visualizador = () => {

    const [imgmeme, setImgmeme] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); //selector de imagen
    const [scrollIndex, setScrollIndex] = useState(0); // Para rastrear el índice de desplazamiento

    const imagesPerRow = 1; // Cuántas imágenes mostrar por fila
    //const rowHeight = 400; // Altura de fila

     // Manejador de evento para seleccionar una imagen
     const handleImageSelect = (meme) => {
        setSelectedImage(meme);
    }

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes') //api con array de 100 memes - basica
        .then(data => data.json())
        .then(json => setImgmeme(json.data.memes))
    },[] )

    const handleScroll = (direction) => {
        if (direction === 'up') {
            setScrollIndex(Math.max(0, scrollIndex - imagesPerRow));
        } else if (direction === 'down') {
            setScrollIndex(Math.min(scrollIndex + imagesPerRow, imgmeme.length - imagesPerRow));
        }
    };

    const handleReturnToList = () => {
        setSelectedImage(null); // Limpia la selección de imagen
    };


    return (

        <div style = {{width:'100%', height:'50%', display:'flex', flexDirection:'column', alignItems:'center', border: '1px solid red'}}>
            <h1 className="mt-3 mb-3 text-center">Editor de memes</h1>

            {/* si selectedImage es null se muestra la lista para seleccionar la imagen */}
            {!selectedImage ? (
                <>

            <h3 style={{margin:'10px'}}>Seleccionar meme</h3>
            
            <button onClick={() => handleScroll('up')} disabled={scrollIndex === 0}>Desplazarse hacia arriba</button>

            <ImageList style= {{margin:'0'}} variant='masonry' sx={{ width: 390, height: 'auto' }} cols={1} gap={8} rowHeight={400}>
            {imgmeme.slice(scrollIndex, scrollIndex + imagesPerRow).map((meme) => (
                    <ImageListItem key={meme.id} onClick={() => handleImageSelect(meme)}>
                        <img style={{objectFit:'cover', width: '100%', height: '100%'}}
                            srcSet={`${meme.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${meme.url}?w=164&h=164&fit=crop&auto=format`}
                            alt={meme.name}
                            loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>

            <button onClick={() => handleScroll('down')} disabled={scrollIndex + imagesPerRow >= imgmeme.length}>Desplazarse hacia abajo</button>
            </>
            ) : (
                <>
                    <button onClick={handleReturnToList}>Volver a la lista</button>
                    <Img selectedImage={selectedImage}/>
                </>
            )}
        </div>
    )
}

export default Visualizador