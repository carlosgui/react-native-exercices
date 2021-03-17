import React from 'react'
import { Text } from 'react-native'
import styles from './estilo'


export default ({max, min}) => {
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (
        <Text style={styles.apptext}>
            Este é um numero aleatório {aleatorio}
        </Text>
    )
}