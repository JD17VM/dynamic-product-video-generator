import { AbsoluteFill, useVideoConfig, useCurrentFrame } from 'remotion';
import { Producto_Unico } from './Producto_Unico';
import { Producto_Doble } from './Producto_Doble';

import styles from '../assets/styles/estilos_producto.module.css'

import { Pieza_Izquierda, Pieza_Derecha } from "./Piezas_Fondo";
import imageHelper from '../utils/imageHelper';

export const Productos = () => {
    const { fps } = useVideoConfig();
    return (
        <AbsoluteFill style={{
          backgroundColor: "white"
        }}>

        <div className={styles.contenedor_piezas_fondo}>
          <Pieza_Izquierda />
          <Pieza_Derecha />
        </div>


        {/*
        <Producto_Unico
          enlace_imagen={imageHelper.ImagenProducto4}
          texto={"Este es el texto de un producto"}
          precio={"S/. 1550.00"}
          relativeFrame={useCurrentFrame() - 0} // Calcular el frame relativo
          fps={fps}
        />
        */}

        <Producto_Doble
          enlace_imagen_1={imageHelper.ImagenProducto1}
          enlace_imagen_2={imageHelper.ImagenProducto3}
          texto_1={"Este es el texto de un producto numero uno"}
          texto_2={"Este es el texto de un producto numero dos"}
          precio_1={"S/. 1550.00"}
          precio_2={"S/. 2100.00"}
          relativeFrame={useCurrentFrame() - 0} // Calcular el frame relativo
          fps={fps}
        />

      </AbsoluteFill>
    );
};
