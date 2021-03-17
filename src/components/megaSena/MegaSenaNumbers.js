import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from '../estilo'

export default ({ numb }) => {

    return (
        <View style={style.container}>
            <Text style={[styles.title, style.num]}>
                {numb}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    num: {
        color: '#fff'
    }
})