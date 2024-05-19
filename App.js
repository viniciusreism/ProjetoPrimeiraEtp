import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native'
import Peso from './componentes/peso'
import Altura from './componentes/altura'
import BtnCalcular from './componentes/btnCalcular';
import Resultado from './componentes/resultado';
import Tabela from './componentes/tabela'

export default function calcimc() {
  const [peso,setPeso] = useState(0)
  const [altura,setaltura] = useState(0)
  const [resultado,setResultado] = useState(0)
  
  const calcImc=()=>{
    if(peso==0 || !peso){
        alert('Informe o seu peso')
        return
    }
    if(altura==0 || !altura){
        alert('Informe a sua altura')
        return
    }
    const r=peso/(altura*altura)
    setResultado(r.toFixed(1))
  }

  return(
    <SafeAreaView style={estilos.corpo}>
        <View style={estilos.bloco}>
            <Text>Calculadora de IMC</Text>
        </View>
        <Peso aoModificar={setPeso}/>
        <Altura aoModificar={setaltura}/>
        <BtnCalcular aoClicar={calcImc}/>
        <Resultado resultado={resultado}/>
        <Tabela/>
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
    tabela:{
        width: '100%',
        resizeMode: 'contain',
        marginTop: -57
    }
});