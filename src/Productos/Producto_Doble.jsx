import { AbsoluteFill, interpolate, useVideoConfig, useCurrentFrame} from "remotion";

import styles from '../assets/styles/estilos_producto.module.css'

import imageHelper from '../utils/imageHelper'


export const Producto_Doble = ({ enlace_imagen_1,enlace_imagen_2, texto_1,texto_2, precio_1,precio_2, relativeFrame, fps }) => {

    const { width: screenWidth, height: screenHeight } = useVideoConfig();
    const frame = useCurrentFrame();

    // Duraciones
    const entradaDuracion = 10; // En fotogramas
    const duracionVisible = 10 * fps; // 10 segundos de visibilidad
    const salidaInicio = entradaDuracion + duracionVisible;
    const salidaDuracion = 10; // En fotogramas
  
    // Cálculo de posiciones para entrada y salida
    const imagenXOffset =
      relativeFrame < entradaDuracion
        ? interpolate(relativeFrame, [0, entradaDuracion], [screenWidth, 0], {
            extrapolateRight: "clamp",
          })
        : relativeFrame >= salidaInicio
        ? interpolate(
            relativeFrame,
            [salidaInicio, salidaInicio + salidaDuracion],
            [0, screenWidth],
            {
              extrapolateLeft: "clamp",
            }
          )
        : 0;
  
    const textoYOffset =
      relativeFrame < entradaDuracion
        ? interpolate(relativeFrame, [0, entradaDuracion], [screenHeight, 0], {
            extrapolateRight: "clamp",
          })
        : relativeFrame >= salidaInicio
        ? interpolate(
            relativeFrame,
            [salidaInicio, salidaInicio + salidaDuracion],
            [0, screenHeight],
            {
              extrapolateLeft: "clamp",
            }
          )
        : 0;
  
    const precioYOffset =
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

    const logoYOffset =
        relativeFrame < entradaDuracion
          ? interpolate(relativeFrame, [0, entradaDuracion], [screenHeight, 0], {
              extrapolateRight: "clamp",
            })
          : relativeFrame >= salidaInicio
          ? interpolate(
              relativeFrame,
              [salidaInicio, salidaInicio + salidaDuracion],
              [0, screenHeight],
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
    const logoOscillationY = createOscillation(5, 0.6); // Oscilación vertical para el precio


    return(
      <AbsoluteFill style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>

        <div className={styles.contenedor_2_productos}>
          <div className={styles.producto}>
            <div className={styles.contenedor_imagen} style={{transform: `translateX(${imagenXOffset + imagenOscillationX}px)`,}}>
                <img src={enlace_imagen_1} alt="" />
            </div>
            <div className={styles.contenedor_texto} style={{ transform: `translateY(${textoYOffset + textoOscillationY}px)`,}}>
              <h1>{texto_1}</h1>
            </div>
            <div className={styles.contenedor_precio} style={{ transform: `translateY(${precioYOffset + precioOscillationY}px)`,}}>
              <h2>{precio_1}</h2>
            </div>
          </div>

          <div className={styles.logo} style={{transform: `translateY(${logoYOffset}px)`}}>
            <img src={imageHelper.Logo_Moliplast} alt="" />
            <div></div>
          </div>

          <div className={styles.producto}>
            <div className={styles.contenedor_imagen} style={{transform: `translateX(${imagenXOffset + imagenOscillationX}px)`,}}>
                <img src={enlace_imagen_2} alt="" />
            </div>
            <div className={styles.contenedor_texto} style={{ transform: `translateY(${textoYOffset + textoOscillationY}px)`,}}>
              <h1 style={{textAlign:"end"}}>{texto_2}</h1>
            </div>
            <div className={styles.contenedor_precio} style={{ transform: `translateY(${precioYOffset + precioOscillationY}px)`,}}>
              <h2 style={{textAlign:"end"}}>{precio_2}</h2>
            </div>
          </div>
        </div>

      </AbsoluteFill>
    );
  }