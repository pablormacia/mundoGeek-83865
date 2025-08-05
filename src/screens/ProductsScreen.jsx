import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'

const ProductsScreen = ({category}) => {
    const [productsFiltered,setProductsFiltered] = useState([])

    useEffect(()=>{
        const productsFilteredByCategory = products.filter(product=>product.category.toLowerCase()===category.toLowerCase())
        setProductsFiltered(productsFilteredByCategory)
    },[])

    return (
        <View >
            <FlatList
                data={productsFiltered}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})