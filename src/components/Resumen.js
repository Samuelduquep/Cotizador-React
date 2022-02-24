import React from 'react'
import styled from '@emotion/styled'
import { PrimerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #0B7C99;
    color: #fff;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
`;


const Resumen = ({datos}) => {
    
    const {marca, year, plan} = datos

    if (marca === '' || year === '' || plan === '') return null

  return (
      <ContenedorResumen>
            <h2>Resumen de tu Seguro</h2>
        <ul>
            <li>Marca: <span>{PrimerMayuscula(marca)}</span> </li>
            <li>Año: <span>{PrimerMayuscula(year)}</span></li>
            <li>Plan: <span>{PrimerMayuscula(plan)}</span></li>
        </ul>
      </ContenedorResumen>
    
  )
}

export default Resumen
