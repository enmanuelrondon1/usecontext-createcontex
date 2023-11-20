import Profesora from "./Profesora";
import Ubicacion from "./Ubicacion";
import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";

const Pagina = () => {
  const { student } = useContext(Contexto);

  const [ocultar1, setOcultar1] = useState(false);
  const [ocultar2, setOcultar2] = useState(false);

  const languaje = student[3].idioma;

  const mostrar1 = () => {
    setOcultar1(!ocultar1);
    setOcultar2(!false)
  };

  const mostrar2 = () => {
    setOcultar2(!ocultar2);
    setOcultar1(!false)
  };

  return (
    <>
      <h1>{student[languaje].titulo}</h1>
      <h2>{student[languaje].texto}</h2>
      <div className="botones">
        <button onClick={mostrar1}>{student[languaje].boton1}</button>
        <button onClick={mostrar2}>{student[languaje].boton2}</button>
      </div>
      {ocultar1 ? <Profesora /> : null}
      {ocultar2 ? <Ubicacion /> : null}
    </>
  );
};

export default Pagina;
