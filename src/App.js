import React, {useState} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 60rem;

  @media (min-width: 768px) {
    margin: 5rem auto;
  }
`;

const ContenedorFormulario = styled.div`
  
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const { datos, cotizacion } = resumen;
  const [cargando, setCargando] = useState(false);

  return (
    <Contenedor>
      <Header
        titulo = 'Cotizador de Seguros'
      />

      <ContenedorFormulario>
        <Formulario
        setResumen={setResumen}
        setCargando={setCargando}
        />
      </ContenedorFormulario>
      {cargando ? <Spinner/> : null}

      {!cargando ? <Resumen datos = {datos}/> : null}
      {!cargando ?  <Resultado cotizacion={cotizacion} cargando={cargando}/> : null}

    </Contenedor>
  
  )
}

export default App;
