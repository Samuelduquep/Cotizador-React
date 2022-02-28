import React, {useState} from 'react'
import styled from '@emotion/styled'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from '../helper';

// StyleComponents -------------------------------------------------------------------------------------------------------

const Campo = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 1rem;

`;

const CampoRadio = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        display:flex;
        align-items: center;
        margin-bottom: 1rem;
    }
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    color: #1e3c72;
    font-size: 1.2rem;
    font-stretch: 5rem;
    font-weight: 400;
    border-radius: 1rem;
    &:hover{
        border: 1px solid  #1e3c72;
    }
`;

const Opciones = styled.option`
    text-align: center;
   
`;

const Boton = styled.button`
    background-color: #1e3c72;
    font-size: 1.6rem;
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition-property:  background-color;
    transition-duration: 0.5s;
    border-radius: 1rem;
    &:hover{
        background-color: #04112c;
        cursor: pointer;
    }
`;

const Error = styled.div`
    color: #DC4D30;
    margin-bottom: 2rem;
    width:100%;
    text-align: left;
`




// -------------------------------------------------------------------------------------------------------



const Formulario = ({setResumen,setCargando}) => {

    const [error, setError] = useState(false);

    const [datos, setDatos] = useState({
        marca: '',
        year:'',
        plan: ''
    });

    //extraer los valores del state (Destructuring)
    const {marca, year, plan} = datos; 

    //Leer datos del formulario y colocarlos en el state
    const obtenerInfo = e =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const corizarSeguro = e =>{
        e.preventDefault();

        if(marca.trim()=== '' || year.trim()=== '' || plan.trim()===''){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        setError(false);

        //base de 2000

        let resultado = 2000;

        //obtener la diferencia de a;os
        const diferencia = obtenerDiferenciaYear(year)
        //por cada a;o hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        //americano 15%
        //asiatico 5%
        //europero 30%
        resultado = calcularMarca(marca)*resultado

        //basico 20%
        //completo 50%

        resultado = parseFloat(calcularPlan(plan)*resultado).toFixed(2)
        //total

        setCargando(true);
        setTimeout(() => {
            setCargando(false)
            setResumen({
            cotizacion: Number(resultado),
            datos
        });
        }, 1000);

        
    }
                     




// -------------------------------------------------------------------------------------------------------


  return (

    <form
        onSubmit={corizarSeguro}
    >
       
        {error ?  <Error>Todos los campos son obligatorios</Error> : null}
        
      <Campo>
          <Label>Marca</Label>
          <Select
            name='marca'
            value={marca}
            onChange={obtenerInfo}
          >
              <Opciones value="">--Seleccione--</Opciones>
              <Opciones value="americano">Americano</Opciones>
              <Opciones value="europeo">Europeo</Opciones>
              <Opciones value="asiatico">Asiatico</Opciones>
          </Select>
      </Campo>
      <Campo>
          <Label>Año</Label>
          <Select
            name='year'
            value={year}
            onChange={obtenerInfo}
          >
             <Opciones value="">-- Seleccione --</Opciones>
                <Opciones value="2022">2022</Opciones>
                <Opciones value="2021">2021</Opciones>
                <Opciones value="2020">2020</Opciones>
                <Opciones value="2019">2019</Opciones>
                <Opciones value="2018">2018</Opciones>
                <Opciones value="2017">2017</Opciones>
                <Opciones value="2016">2016</Opciones>
                <Opciones value="2015">2015</Opciones>
                <Opciones value="2014">2014</Opciones>
                <Opciones value="2013">2013</Opciones>
                <Opciones value="2012">2012</Opciones>
          </Select>
      </Campo>
      <CampoRadio>
          <Label>Plan</Label>
          <input
            type='radio'
            name='plan'
            value='basico'
            checked={plan==='basico'}
            onChange={obtenerInfo}
          /> Básico

          <input
            type='radio'
            name='plan'
            value='completo'
            checked={plan==='completo'}
            onChange={obtenerInfo}
          /> Completo
      </CampoRadio>     
      
      <Boton type='submit'>Cotizar</Boton>
    </form>
  )
}

export default Formulario
