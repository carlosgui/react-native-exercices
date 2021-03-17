import React, { useState } from 'react'
import { Button, Text } from 'react-native'

import Filho from './Filho'

export default props => {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState('')
    const showSonNumber = (value, text) => {
        setNumber(value)
        setText(text)
    }

    return (
        <>
            <Text>Pai pra filho (Indireto)</Text>
            <Text>{text}{number}</Text>
            <Filho min={10} max={100} function={showSonNumber} />
        </>
    )
}