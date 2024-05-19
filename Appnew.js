import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native'
import Gasolina from './compt/gasolina'
import Etanol from './compt/etanol'
import BtnCalcular from './compt/btnCalcular'
import Resultado from './compt/resultado'
import ImgResultado from './compt/imgResultado'

export default function Appnew(){
  const [gasolina,setGasolina] = useState(0)
  const [etanol,setEtanol] = useState(0)
  const [resultado,setResultado] = useState(' ')
  
  const calcular=()=>{
    if(!gasolina){
        alert('Informe o preço da gasolina')
        return
    }
    if(!etanol){
        alert('Informe o preço do etanol')
        return
    }
    let res 
    let calc=((etanol/gasolina)*100).toFixed(1)
    if(calc > 70){
        res='Gasolina'
    }else{
        res='Etanol'
    }
    alert('O Etanol está custando' + calc + '% da gasolina. Portanto é melhor abastecer com ' + res)
    setResultado(res)
  }

    const limpar=()=>{
        setResultado('')
    }

    const setarGasolina=(v)=>{
        limpar()
        setGasolina(v)
    }

    const setarEtanol=(v)=>{
        limpar()
        setEtanol(v)
    }

  return(
    <SafeAreaView style={estilos.principal}>
        <Gasolina aoModificar={setarGasolina}/>
        <Etanol aoModificar={setarEtanol}/>
        <BtnCalcular aoClicar={calcular}/>
        <Resultado resultado={resultado}/>
        <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
    corpo: {
        padding:10
    },
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
    principal:{
        padding:10
    },
});