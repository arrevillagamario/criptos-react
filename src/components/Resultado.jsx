import React from 'react'
import styled from '@emotion/styled'

const Contenedor=styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
`   
const Imagen=styled.img`
    display: block;
    width: 150px;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;
`
const Texto=styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio=styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Resultado = ({resulta}) => {
    const{PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE}=resulta
  return (
    <Contenedor>
        <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Imagen criptomoneda" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado