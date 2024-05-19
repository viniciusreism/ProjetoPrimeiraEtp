import React from 'react';
import {StyleSheet, View,Image} from 'react-native';

export default function tabela(){
    return(
        <View style={estilos.bloco}>
            <Image
            source={require('./Fotos/TabelaIMC.jpeg')}
            style={estilos.tabela}
            />
        </View>
    )
}
const estilos = StyleSheet.create({
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