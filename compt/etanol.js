import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native'

export default props=>{
    return(
        <View style={estilos.principal}>
        <Text>Digite o preço do Etanol:</Text>
        <TextInput
            style={estilos.txt}
            autoFocus={true}
            keyboardType={'numeric'}
            onChangeText={text=>props.aoModificar(text)}
        ></TextInput>
        </View>
    )
}
const estilos = StyleSheet.create({
    principal: {
        marginBottom: 20,
        width: '100%',
    },
    txt: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 10,
    },
});