import { useContext } from "react";
import Contexto from "../contexto/Contexto";

const Idiomas = () => {
  const { setStudent } = useContext(Contexto);
  const { student } = useContext(Contexto);

  const sustitucion = (posicion) => {
    setStudent(
      student.map((dato, indice) =>
        indice == 3 ? { ...dato, idioma: posicion } : { ...dato }
      )
    );
  };

  const cambio1 = () => {
    sustitucion(0);
  };
  const cambio2 = () => {
    sustitucion(1);
  };

  const cambio3 = () => {
    sustitucion(2);
  };

  return (
    <div className="idiomas">
      <div className="bandera" onClick={cambio1}>
        <img src="../imagenes/spain.jpg" />
      </div>
      <div className="bandera" onClick={cambio2}>
        <img src="../imagenes/francia.png" />
      </div>
      <div className="bandera" onClick={cambio3}>
        <img src="../imagenes/uk.png" />
      </div>
    </div>
  );
};

export default Idiomas;
