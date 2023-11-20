import { useContext } from "react";
import Contexto from '../contexto/Contexto'


const Ubicacion = () => {
  const {student } = useContext(Contexto)
  const languaje = student[3].idioma
   return (
    <div className="ubicacion">
      <h1>{student[languaje].lugar}</h1>
      <div className="texto"> {student[languaje].direccion}</div>
    </div>
  );
};

export default Ubicacion