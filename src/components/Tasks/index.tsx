import { Text, View } from "react-native";
import { style } from "./styles";
import { TaskHeader } from "../TaskHeader";
import { TaskList } from "../TaskList";
import { Task } from "../../screens/Home";

type Props = {
  tasks: Task[]
}

export function Tasks({ tasks } : Props) {
  const quantityTasksFinished = tasks.filter(task => task.hasFinishedTask).length;

  return (
    <View style={style.container}>
      <TaskHeader quantityTasksCreated={tasks.length} quantityTasksFinished={quantityTasksFinished} />
      <TaskList tasks={tasks} />
    </View>
  )
}