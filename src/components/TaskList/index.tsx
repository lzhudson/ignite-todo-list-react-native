import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { ClipboardText } from "phosphor-react-native";
import { TaskItem } from "../TaskItem";
import { Task } from "../../screens/Home";
import { Dispatch, SetStateAction } from "react";

type Props = {
  tasks: Task[]
  onUpdateTask: Dispatch<SetStateAction<Task[]>>
}

export function TaskList({ tasks, onUpdateTask} : Props) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        keyExtractor={task => String(task.id)}
        renderItem={({ item }) => (
          <TaskItem  
            id={item.id}
            name={item.title}
            hasFinishedTask={item.hasFinishedTask}
            onUpdateTask={onUpdateTask}
          />
        )}
      />
    </View>
  )
}