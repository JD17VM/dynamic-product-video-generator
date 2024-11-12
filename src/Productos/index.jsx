import { AbsoluteFill, useVideoConfig, useCurrentFrame } from 'remotion';
import { Producto_Unico } from './Producto_Unico'; 

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

        <Producto_Unico
          enlace_imagen={imageHelper.ImagenProducto4}
          texto={"Este es el texto de un producto"}
          precio={"S/. 1550.00"}
          relativeFrame={useCurrentFrame() - 0} // Calcular el frame relativo
          fps={fps}
        />

      </AbsoluteFill>
    );
};
