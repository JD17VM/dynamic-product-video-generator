import { Composition } from "remotion";
import { Productos } from './Productos';
import './assets/styles/estilos_generales.css'

export const RemotionRoot = () => {
  const fps = 30
  const segundos = 10
  const duracionTotalVideo = (fps * segundos) + 1 // 1 frame más para que dure el tiempo exacto

  return (
    <>
      <Composition
        id="Productos" // Este ID debe coincidir con el comando de renderizado
        component={Productos}
        durationInFrames={duracionTotalVideo}
        fps={fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
