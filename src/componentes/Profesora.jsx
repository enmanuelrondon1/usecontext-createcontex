import {useContext} from 'react'
import Contexto from '../contexto/Contexto'

const Profesora = () => {
  const {student} = useContext(Contexto)
  const languaje = student[3].idioma
  const imagen = `../imagenes/${student[languaje].foto}`
  return (
    <div className="profesora">
      <h1>{student[languaje].boton1}</h1>
      <div>
        <img src={imagen} />
      </div>
      <div className="nombre">{student[languaje].nombre}</div>
    </div>
  );
};

export default Profesora;
