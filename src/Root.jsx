import { Composition } from "remotion";
import { Productos } from './Productos';
import './assets/styles/estilos_generales.css'

import imageHelper from "./utils/imageHelper";

// Datos que quieres pasar al componente Productos
const productosData = {
  "data": [
    {
      "producto_doble": true,
      "enlace_imagen_1": imageHelper.ImagenProducto1,
      "texto_1": "Este es el prdsgoducto 01",
      "precio_1": "S/. 100.00",
      "enlace_imagen_2": imageHelper.ImagenProducto2,
      "texto_2": "Este es el psdfgsfroducto 02",
      "precio_2": "S/. 1340.sdfg00"
    },
    {
      "producto_doble": false,
      "enlace_imagen": imageHelper.ImagenProducto3,
      "texto": "Este es el producto sdfg03",
      "precio": "S/. 20sdfg0.00"
    },
    {
      "producto_doble": false,
      "enlace_imagen": imageHelper.ImagenProducto4,
      "texto": "Este es el prsdfgoducto 04",
      "precio": "S/. 1500sdg.00"
    },
    {
      "producto_doble": true,
      "enlace_imagen_1": imageHelper.ImagenProducto1,
      "texto_1": "Este es el psdgfdsfgroducto 05",
      "precio_1": "S/. 13sdg50.00",
      "enlace_imagen_2": imageHelper.ImagenProducto3,
      "texto_2": "Este es el producto 06",
      "precio_2": "S/. 1700dd.00"
    },
    {
      "producto_doble": false,
      "enlace_imagen": imageHelper.ImagenProducto4,
      "texto": "Este es el producto 07",
      "precio": "S/. 30sf0.00"
    },
    {
      "producto_doble": false,
      "enlace_imagen": imageHelper.ImagenProducto1,
      "texto": "Este es el producto 08",
      "precio": "S/. 50fsg0.00"
    }
  ],
  "metadata": {
    "nombre_video": "Video_D_4"
  }
};

export const RemotionRoot = () => {
  const fps = 30
  const segundos = 10
  const duracionProductoEnFrames = (segundos + 3.19) * fps
  const cantidadTotalProductos = productosData.data.length
  const duracionTotalVideo = Math.floor((duracionProductoEnFrames * cantidadTotalProductos) + 1) // 1 frame más para que dure el tiempo exacto

  return (
    <>
      <Composition
        id="Productos" // Este ID debe coincidir con el comando de renderizado
        component={Productos}
        durationInFrames={duracionTotalVideo}
        fps={fps}
        width={1920}
        height={1080}
        defaultProps={productosData}
      />
    </>
  );
};
