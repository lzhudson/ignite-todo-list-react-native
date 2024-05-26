import { Text, View } from "react-native";
import { style } from "./styles";

type Props = {
  quantityTasksCreated: number;
  quantityTasksFinished: number
}

export function TaskHeader({ quantityTasksCreated, quantityTasksFinished } : Props) {
  return (
    <View style={style.container}>
      <View style={style.containerItem}>
        <Text style={style.itemLabel}>Criadas</Text>
        <View style={style.itemQuantityContainer}>
          <Text style={style.itemQuantity}>{quantityTasksCreated}</Text>
        </View>
      </View>
      <View style={style.containerItem}>
        <Text style={{...style.itemLabel, ...style.itemLabelPurple}}>Concluídas</Text>
        <View style={style.itemQuantityContainer}>
          <Text style={style.itemQuantity}>{quantityTasksFinished}</Text>
        </View>
      </View>
    </View>
  )
}