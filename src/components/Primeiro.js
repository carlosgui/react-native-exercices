import React from 'react';
import { SafeAreaView } from 'react-native';
import Componente, {ComponenteOne, ComponenteTwo} from './Multi';

export default () => {
    return (
        <SafeAreaView>
            <Componente />
            <ComponenteOne />
            <ComponenteTwo />
        </SafeAreaView>
    );
}
