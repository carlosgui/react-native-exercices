import React from 'react'
import { View, Text } from 'react-native'

import styles from './estilo'

export default props => (
    <View>
        <Text style={styles.title}>{props.principal}</Text>
        <Text style={styles.subTitle}>{props.segundario}</Text>
    </View>
)