import React from 'react'
import { Text, Platform } from 'react-native'


export default () => {
    switch(Platform.OS) {
        case 'android':
            return <Text>Android</Text>
            break;

        case 'ios':
            return <Text>IOS</Text>
            break;

        default:
            return <Text>Eita!</Text>
            break;
    }
}