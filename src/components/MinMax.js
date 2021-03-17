import React from 'react'
import { Text } from 'react-native'
import styles from './estilo'

export default (props) => <Text style={styles.apptext}>O valor de {props.x} é maior que {props.y}</Text>