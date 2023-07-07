import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit=styled.input`
    background-color: #9497FF;
    border:none;
    width: 100%;
    color: #ffff;
    font-weight: 700;
    text-transform: uppercase;  
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color .3s ease;
    :hover{
        background-color: #7a7dfe;
    }
    margin-top:30px;
`

const Formulario = ({setMonedas}) => {

    const [criptos,setCriptos]=useState([]);
    const[error, setError]=useState(false);
    const [moneda, SelectMoneda]=useSelectMonedas('Elige tu moneda',monedas);
    const [criptomoneda, SelectCripto]=useSelectMonedas('Elige tu Criptomoneda',criptos);
    useEffect(() => {
        const consultarAPI=async()=>{
            const url= "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta=await fetch(url)
            const resultado=await respuesta.json()
           
            const aCriptos=resultado.Data.map(cripto=>{
                const objeto={
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                

                return objeto

            })
            setCriptos(aCriptos)
        
            
        }
      consultarAPI();
    }, [])
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if([moneda,criptomoneda].includes('')){
            setError(true)

            return
        }
        
        
        setMonedas({moneda,criptomoneda})
        setError(false)
        
    }

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form onSubmit={handleSubmit}>
        
        <SelectMoneda/>
        <SelectCripto/>
        <InputSubmit
            type='submit'
            value='Cotizar'
        />

        </form>
    </>
    
  )
}

export default Formulario