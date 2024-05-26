import { Text, View } from "react-native";
import { styles } from "./styles";
import { ClipboardText } from "phosphor-react-native";

export function TaskLisyEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.contentEmptyTask}>
        <ClipboardText size={78} color="#808080" />
        <Text style={styles.textEmptyTaskBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textEmptyTask}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}