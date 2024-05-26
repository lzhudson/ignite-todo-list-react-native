import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { ClipboardText } from "phosphor-react-native";
import { TaskItem } from "../TaskItem";
import { Task } from "../../screens/Home";

type Props = {
  tasks: Task[]
}

export function TaskList({ tasks } : Props) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        keyExtractor={task => String(task.id)}
        renderItem={({ item }) => (
          <TaskItem  
            name={item.title}
            hasFinishedTask={item.hasFinishedTask}
          />
        )}
      />
    </View>
  )
}