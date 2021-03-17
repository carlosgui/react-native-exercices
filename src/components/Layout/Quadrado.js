import React from 'react'
import { View } from 'react-native'

export default ({ color, lado = 50, fG = 1 }) => {
    return (
        <View 
            style={{
                width: lado,
                height: lado,
                flexGrow: fG,
                backgroundColor: color || 'red'
            }}
        />
    )
}