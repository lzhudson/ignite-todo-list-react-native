import { Image, Text, View } from "react-native";
import { style } from './styles'

export function Header() {
  return (
    <View style={style.container}>
      <Image style={style.logo} source={require('../../../assets/logo-todo.png')} />
    </View>
  )
}