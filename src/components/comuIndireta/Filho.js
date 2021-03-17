import React, { useState } from 'react'
import { Button, Text } from 'react-native'

export default props => {

    const genRandomNumber = (min, max) => {
        const fac = max - min + 1
        return parseInt(Math.random() * fac) + min
    }

    return (
        <Button title="DO IT" onPress={() => {
            const n = genRandomNumber(props.min, props.max)
            props.function(n, 'O numero é: ')
        }} />
    )

}