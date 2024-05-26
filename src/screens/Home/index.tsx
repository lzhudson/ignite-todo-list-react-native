import { View } from "react-native";
import { AddTaskForm } from "../../components/AddTaskForm";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { style } from "./styles";
import { useState } from "react";

export interface Task {
  id: number;
  title: string;
  hasFinishedTask: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <View style={style.container}>
      <Header />
      <AddTaskForm onAddTask={setTasks} />
      <Tasks tasks={tasks} />
    </View>
  )
}