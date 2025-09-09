import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import { clearSession } from '../db'

const Header = ({ title, subtitle }) => {
  const navigation = useNavigation()
  const canGoBack = navigation.canGoBack()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.iconsContainer}>
        {
          canGoBack && <Pressable onPress={() => navigation.goBack()}><Icon name="arrow-left-circle" size={32} color={colors.white} /></Pressable>
        }
        {/* <Image source={require('../../assets/logoo.svg')} /> No se puede SVG así */}
        <Pressable onPress={null}><Icon name="log-out" size={32} color={colors.white} /></Pressable>
      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    height: 160,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: "PressStart2P-Regular"
  },
  subtitle: {
    fontSize: 14,
    color: colors.white
  },
  goBackIcon: {
    //position:"absolute",
    //bottom:0,
    //left:0  
  },
  iconsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:48
  }
})

