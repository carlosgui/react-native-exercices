import React, { useState } from 'react'
import { Button, Text } from 'react-native'

export default props => {

    return (
        <>
            <Text>Pai pro filho (Direto)</Text>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </>
    )
}