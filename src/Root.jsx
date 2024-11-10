import { Composition } from "remotion";
import { Productos } from './Productos';
import './assets/styles/estilos_generales.css'

export const RemotionRoot = () => {
  const fps = 30
  const duracionTotalVideo = 60

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
