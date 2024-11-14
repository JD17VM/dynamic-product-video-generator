import { AbsoluteFill, useVideoConfig, useCurrentFrame, Sequence } from 'remotion';
import { Producto_Unico } from './Producto_Unico';
import { Producto_Doble } from './Producto_Doble';

import styles from '../assets/styles/estilos_producto.module.css'

import { Pieza_Izquierda, Pieza_Derecha } from "./Piezas_Fondo";

export const Productos = ({ data = [] }) => {
    const { fps } = useVideoConfig();

    // Duración por producto
    const entradaDuracion = 10;
    const duracionVisible = 10 * fps;
    const salidaDuracion = 10;
    const descanso = 3 * fps;
    const duracionPorProducto = entradaDuracion + duracionVisible + salidaDuracion + descanso;

    return (
        <AbsoluteFill style={{
          backgroundColor: "white"
        }}>

        <div className={styles.contenedor_piezas_fondo}>
          <Pieza_Izquierda />
          <Pieza_Derecha />
        </div>

        {data.map((producto, index) => {
          const offset = index * duracionPorProducto; // Calcular el offset para este producto
          return (
            <Sequence
              key={index}
              from={offset}
              durationInFrames={duracionPorProducto}
            >
            
              {!producto.producto_doble ? (
              <Producto_Unico
                enlace_imagen={producto.enlace_imagen}
                texto={producto.texto}
                precio={producto.precio}
                relativeFrame={useCurrentFrame() - offset} // Calcular el frame relativo
                fps={fps}
                index={index}
              />
              ) : (
              <Producto_Doble
                enlace_imagen_1={producto.enlace_imagen_1}
                enlace_imagen_2={producto.enlace_imagen_2}
                texto_1={producto.texto_1}
                texto_2={producto.texto_2}
                precio_1={producto.precio_1}
                precio_2={producto.precio_2}
                relativeFrame={useCurrentFrame() - offset} // Calcular el frame relativo
                fps={fps}
                index={index}
              />
              )}
              
            </Sequence>
          );
        })}
      </AbsoluteFill>
    );
};
