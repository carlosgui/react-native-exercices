import React, { useState } from 'react'
import { Button, Text } from 'react-native'

import Filho from './Filho'

export default props => {
    let x = 10;
    let y = 100;

    return (
        <>
            <Filho a={x} b={y} />
        </>
    )
}