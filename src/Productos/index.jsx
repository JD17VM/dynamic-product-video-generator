import { AbsoluteFill } from 'remotion';

import styles from '../assets/styles/estilos_producto.module.css'

import { Pieza_Izquierda, Pieza_Derecha } from "./Piezas_Fondo";

export const Productos = () => {

    return (
        <AbsoluteFill style={{
          backgroundColor: "white"
        }}>

        <div className={styles.contenedor_piezas_fondo}>
          <Pieza_Izquierda />
          <Pieza_Derecha />
        </div>

      </AbsoluteFill>
    );
};
