import React from 'react';
import { Text } from 'react-native';
import styles from './estilo'


const Componente = () => {
    return (<Text style={styles.apptext}> This is the DEFAULT component</Text>);
}

const ComponenteOne = () => {
    return (<Text style={styles.apptext}> This is the FIRST component</Text>);
}

const ComponenteTwo = () => {
    return (<Text style={styles.apptext}> This is the SECOND component</Text>);
}

export { ComponenteOne, ComponenteTwo };
export default Componente;