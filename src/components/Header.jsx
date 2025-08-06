import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({title,subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.purple,
        height: 160,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:20,
        color:colors.white,
        fontFamily: "PressStart2P-Regular"
    },
    subtitle:{
        fontSize:14,
        color:colors.white
    }
})