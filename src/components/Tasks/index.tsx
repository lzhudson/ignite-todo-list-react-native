import { Text, View } from "react-native";
import { style } from "./styles";
import { TaskHeader } from "../TaskHeader";
import { TaskList } from "../TaskList";

export function Tasks() {
  return (
    <View style={style.container}>
      <TaskHeader />
      <TaskList />
    </View>
  )
}