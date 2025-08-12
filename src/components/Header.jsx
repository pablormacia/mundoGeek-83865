import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, subtitle }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Pressable onPress={()=>navigation.goBack()}><Text>Atrás</Text></Pressable>
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
  }
})