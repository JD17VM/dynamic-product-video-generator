import React from 'react';
import { AbsoluteFill, interpolate, useVideoConfig, useCurrentFrame } from 'remotion';
import imageHelper from '../utils/imageHelper';

import styles from '../assets/styles/estilos_producto.module.css'

const screenWidth = 1920;
const screenHeight = 1080; 

const LOCAL_ASSETS = "http://localhost:3001/assets";

const Producto_Unico = ({ enlace_imagen, texto, precio, relativeFrame, fps, index }) => {

  const { width: screenWidth, height: screenHeight } = useVideoConfig();
  const frame = useCurrentFrame();

  const entradaDuracion = 10; // En fotogramas
  const duracionVisible = 10 * fps; // 10 segundos de visibilidad
  const salidaInicio = entradaDuracion + duracionVisible;
  const salidaDuracion = 10; // En fotogramas


  // Cálculo de posiciones para entrada y salida
  const imagenXOffset =
    frame < entradaDuracion
      ? interpolate(frame, [0, entradaDuracion], [screenWidth, 0], {
        extrapolateRight: "clamp",
      })
      : frame >= salidaInicio
        ? interpolate(
          frame,
          [salidaInicio, salidaInicio + salidaDuracion],
          [0, screenWidth],
          {
            extrapolateLeft: "clamp",
          }
        )
        : 0;


  const textoYOffset =
    frame < entradaDuracion
      ? interpolate(frame, [0, entradaDuracion], [screenHeight, 0], {
        extrapolateRight: "clamp",
      })
      : frame >= salidaInicio
        ? interpolate(
          frame,
          [salidaInicio, salidaInicio + salidaDuracion],
          [0, screenHeight],
          {
            extrapolateLeft: "clamp",
          }
        )
        : 0;

  const precioYOffset =
    frame < entradaDuracion
      ? interpolate(frame, [0, entradaDuracion], [-screenHeight, 0], {
        extrapolateRight: "clamp",
      })
      : frame >= salidaInicio
        ? interpolate(
          frame,
          [salidaInicio, salidaInicio + salidaDuracion],
          [0, -screenHeight],
          {
            extrapolateLeft: "clamp",
          }
        )
        : 0;

  const logoYOffset =
    relativeFrame < entradaDuracion
      ? interpolate(relativeFrame, [0, entradaDuracion], [-screenHeight, 0], {
        extrapolateRight: "clamp",
      })
      : relativeFrame >= salidaInicio
        ? interpolate(
          relativeFrame,
          [salidaInicio, salidaInicio + salidaDuracion],
          [0, -screenHeight],
          {
            extrapolateLeft: "clamp",
          }
        )
        : 0;


  const createOscillation = (amplitude, speed) =>
    amplitude * Math.sin((2 * Math.PI * frame) / (fps * speed));

  const imagenOscillationX = createOscillation(10, 1); // Oscilación horizontal para la imagen
  const textoOscillationY = createOscillation(15, 0.8); // Oscilación vertical para el texto
  const precioOscillationY = createOscillation(12, 0.9); // Oscilación vertical para el precio
  const logoOscillationY = createOscillation(15, 0.6); // Oscilación vertical para el precio

  // Ejemplo simplificado:
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <div className={styles.contenedor_contenido} style={{ gridTemplateAreas: index % 2 !== 0 ? `"cont_texto cont_imagen " "cont_precio cont_imagen"` : `"cont_imagen cont_texto" "cont_imagen cont_precio"` }}>

        <div className={styles.contenedor_imagen}
          style={{
            transform: `translateX(${imagenXOffset + imagenOscillationX}px)`,
          }}
        >
          <img src={enlace_imagen} alt="Producto" />
        </div>

        <div className={styles.contenedor_texto}
          style={{ transform: `translateY(${textoYOffset + textoOscillationY}px)`, }}
        >
          <h1>{texto}</h1>
        </div>
        <div className={styles.contenedor_precio}
          style={{ transform: `translateY(${precioYOffset + precioOscillationY}px)`, }}
        >
          <h2>{precio}</h2>
        </div>
      </div>

      <div className={styles.logo_moliplast} style={{
        transform: `translateY(${logoYOffset + logoOscillationY}px)`,
      }}>
        <img src={imageHelper.Logo_Moliplast} alt="" />
      </div>
    </AbsoluteFill>
  );
};

export { Producto_Unico };
