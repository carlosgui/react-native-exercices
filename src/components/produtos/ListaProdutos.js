import React, { useState } from 'react'
import { Button, FlatList, Text } from 'react-native'
import styles from '../estilo'

import produtos from './produtos'

export default props => {
    const renderProducts = () => {
        return produtos.map(produto => {
            return <Text key={produto.id}>{produto.id} - {produto.nome} - {produto.value}</Text>
        })
    }
    const renderProductsFlatList = ({ item: produto}) => {
        return <Text key={produto.id}>{produto.id} - {produto.nome} - {produto.value}</Text>
    }

    return (
        <>
            <Text style={styles.title}>
                Lista de produtos (normal)
            </Text>
            {renderProducts()}

            <Text style={styles.title}>
                Lista de produtos (flatList)
            </Text>
            <FlatList 
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={renderProductsFlatList}
            />
        </>
    )
}