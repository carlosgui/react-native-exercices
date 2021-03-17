import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import styles from './estilo'

export default ({ startNumber = 0, step = 1 }) => {
    const [number, setNumber] = useState(startNumber);

    const inc = () => setNumber(number + step);
    const dec = () => setNumber(number - step);

    return (
        <>
            <Text style={styles.apptext}>{number}</Text>
            <Button style={{ margin: 10 }} title={'Mais '+step} onPress={inc} />
            <Button title={'Menos '+step} onPress={dec} />
        </>
    )
}