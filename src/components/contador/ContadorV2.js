import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import ContadorButtons from './ContadorButtons'
import ContadorDisplay from './ContadorDisplay'

export default props => {
     const [num, setNum] = useState(0)

     const inc = () => setNum(num + 1)
     const dec = () => setNum(num - 1)

     return (
        <>
            <Text>
                Contador
            </Text>
            <ContadorDisplay num={num} />
            <ContadorButtons inc={inc} dec={dec} />
        </>
     )

}