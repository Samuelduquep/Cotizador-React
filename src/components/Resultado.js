import React from 'react'
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgba(145, 190, 230, .2); 
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #fff;
`

const ContenedorPrecio = styled.div`
    padding: 1rem;
    background-color: #8CE6D5;
    margin-top: 1rem;
`;

const TextoCotizacion = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #1e3c72;
`

const Resultado = ({cotizacion, cargando}) => {
    if(cotizacion === 0) return !cargando ? <Mensaje>Elige la Marca y el tipo de seguro que deseas cotizar</Mensaje> : null
  return (

    <ContenedorPrecio>
      <TransitionGroup
        component='div'
        className='resultado'
      >
            <CSSTransition
                classNames='resultado'
                key={cotizacion}
                timeout={{enter: 500, exit: 500}}
            >
                    <TextoCotizacion>El Precio es de € {cotizacion}</TextoCotizacion>
            </CSSTransition>
      </TransitionGroup>
    </ContenedorPrecio>
  
  )
}

export default Resultado
