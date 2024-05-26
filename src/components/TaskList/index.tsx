import { Text, View } from "react-native";
import { styles } from "./styles";
import { ClipboardText } from "phosphor-react-native";
import { TaskItem } from "../TaskItem";

export function TaskList() {
  return (
    <View style={styles.container}>
      <TaskItem hasFinishedTask={false} />
      <TaskItem hasFinishedTask={true} />
    </View>
  )
}