import { View } from "react-native";
import { AddTaskForm } from "../../components/AddTaskForm";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { style } from "./styles";

export function Home() {
  return (
    <View style={style.container}>
      <Header />
      <AddTaskForm />
      <Tasks />
    </View>
  )
}