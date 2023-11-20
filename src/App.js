import "./App.css";
import Pagina from "./componentes/Pagina";
import Idiomas from "./componentes/Idiomas";
import Provider from "./contexto/Provider";

function App() {
  return (
    <Provider>
      <div className="banderas">
        <Idiomas />
      </div>
      <div className="contenido">
        <Pagina />
      </div>
    </Provider>
  );
}

export default App;
