import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'
import KarlaRegularText from '../components/KarlaRegularFont'
import Search from '../components/Search'

const ProductsScreen = ({category}) => {
    const [productsFiltered,setProductsFiltered] = useState([])
    const [keyword,setKeyword] = useState("")

    //console.log("Keyword: ",keyword)

    useEffect(()=>{
        const productsFilteredByCategory = products.filter(product=>product.category.toLowerCase()===category.toLowerCase())
        if(keyword){ //Re-filtramos la lista de productos según la búsqueda del usuario
            const productsFilteredByKeyword = productsFilteredByCategory.filter(product=>product.title.toLowerCase().includes(keyword.toLocaleLowerCase()))
            setProductsFiltered(productsFilteredByKeyword)
        }else{
            setProductsFiltered(productsFilteredByCategory)
        }
    },[category,keyword])

    return (
        <View >
            <Search setKeyword={setKeyword} />
            <FlatList
                data={productsFiltered}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <KarlaRegularText style={{fontSize:16}}>{item.title}</KarlaRegularText>}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})