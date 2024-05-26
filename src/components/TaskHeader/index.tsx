import { Text, View } from "react-native";
import { style } from "./styles";

export function TaskHeader() {
  return (
    <View style={style.container}>
      <View style={style.containerItem}>
        <Text style={style.itemLabel}>Criadas</Text>
        <View style={style.itemQuantityContainer}>
          <Text style={style.itemQuantity}>0</Text>
        </View>
      </View>
      <View style={style.containerItem}>
        <Text style={{...style.itemLabel, ...style.itemLabelPurple}}>Concluídas</Text>
        <View style={style.itemQuantityContainer}>
          <Text style={style.itemQuantity}>0</Text>
        </View>
      </View>
    </View>
  )
}