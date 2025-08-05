import { StyleSheet, Text, View, Image, FlatList,Pressable } from 'react-native'
import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard';

const CategoriesScreen = ({setCategorySelected}) => {
    const renderCategoryItem = ({ item }) => {
        //console.log(item)
        return (
            <Pressable onPress={()=>setCategorySelected(item.title)}>
                <FlatCard style={styles.cardCustom}>
                    <Text>{item.title}</Text>
                    <Image width={120} height={50} source={{ uri: item.image }} resizeMode='contain' />
                </FlatCard>
            </Pressable>
        )
    }
    return (
        <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    cardCustom: {
        //backgroundColor:"green"
    }
})