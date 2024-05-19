import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

export default props=>{
    return(
        <View style={estilos.bloco}>
        <TouchableHighlight
            style={estilos.btnClc}
            onPress={()=>props.aoClicar()}
        >
            <Text style={estilos.txtBtn}>calcular</Text>
        </TouchableHighlight>
        </View>
    )
}
const estilos = StyleSheet.create({
    bloco: {
        marginBottom: 20,
        width: '100%',
    },
    btnClc:{
        backgroundColor: '#048',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderRadius:20,
    },
    txtBtn:{
        fontSize:15,
        textTransform: 'uppercase',
        color: '#fff'
    },
});