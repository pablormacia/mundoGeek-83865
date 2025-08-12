import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import products from '../../data/products.json'
import { useEffect, useState } from 'react'
import KarlaRegularText from '../../components/KarlaRegularFont'
import Search from '../../components/Search'

const ProductsScreen = ({ navigation, route }) => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const [keyword, setKeyword] = useState("")

    //console.log("Keyword: ",keyword)

    const { category } = route.params

    const renderProductsItem = ({ item }) => (
        <View>
            <Pressable onPress={() => navigation.navigate("Producto")}>
                <KarlaRegularText style={{ fontSize: 16 }}>{item.title}</KarlaRegularText>
            </Pressable>
        </View>

    )

    useEffect(() => {
        const productsFilteredByCategory = products.filter(product => product.category.toLowerCase() === category.toLowerCase())
        if (keyword) { //Re-filtramos la lista de productos según la búsqueda del usuario
            const productsFilteredByKeyword = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(keyword.toLocaleLowerCase()))
            setProductsFiltered(productsFilteredByKeyword)
        } else {
            setProductsFiltered(productsFilteredByCategory)
        }
    }, [category, keyword])

    return (
        <View >
            <Search setKeyword={setKeyword} />
            <FlatList
                data={productsFiltered}
                keyExtractor={item => item.id}
                renderItem={renderProductsItem}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})