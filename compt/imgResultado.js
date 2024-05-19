import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default props => {
    return (
        <View style={estilos.bloco}>{
            props.comb == '' ?
                <Image
                    source={require('./Fts/Bomba.jpeg')}
                    style={estilos.bomba}
                />
            :
                props.comb == 'G' ?
                    <Image
                        source={require('./Fts/BombaG.jpeg')}
                        style={estilos.bomba}
                    />
                :
                    <Image
                        source={require('./Fts/BombaE.jpeg')}
                        style={estilos.bomba}
                    />
        }</View>
    )
}
const estilos = StyleSheet.create({
    bloco: {
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bomba: {
        resizeMode: 'stretch'
    }
});