import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {

    return (
        <View style={pageStyle.flexV3}>
            <Quadrado color="#fabcd4" lado={30} fG={1}/>
            <Quadrado color="#fb13a8" lado={40} fG={2}/>
            <Quadrado color="#fbfbfb" lado={50} fG={3}/>
            <Quadrado  lado={60} fG={4}/>
        </View>
    )

}

const pageStyle = StyleSheet.create({
    flexV1: {
        flexGrow: 1,
        backgroundColor: 'black',
        justifyContent: 'space-evenly'
    },
    flexV2: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    flexV3: {
        position: 'absolute',
        height: 350,
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})