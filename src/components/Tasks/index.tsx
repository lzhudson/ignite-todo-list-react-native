import { Text, View } from "react-native";
import { style } from "./styles";
import { TaskHeader } from "../TaskHeader";
import { TaskList } from "../TaskList";
import { Task } from "../../screens/Home";
import { Dispatch, SetStateAction } from "react";

type Props = {
  tasks: Task[]
  onUpdateTask: Dispatch<SetStateAction<Task[]>>
}

export function Tasks({ tasks, onUpdateTask } : Props) {
  const quantityTasksFinished = tasks.filter(task => task.hasFinishedTask).length;

  return (
    <View style={style.container}>
      <TaskHeader quantityTasksCreated={tasks.length} quantityTasksFinished={quantityTasksFinished} />
      <TaskList onUpdateTask={onUpdateTask} tasks={tasks} />
    </View>
  )
}