import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native'
import { Task } from "../../screens/Home";
import { Dispatch, SetStateAction } from "react";

type Props = {
  id: number
  name: string
  hasFinishedTask: boolean
  onUpdateTask: Dispatch<SetStateAction<Task[]>>

}

export function TaskItem({ id, name, hasFinishedTask, onUpdateTask } : Props) {

  function handleFinishTask(id: number) {
    onUpdateTask(prevState => {
      const tasksUpdated = prevState.map(task => {
        if(task.id === id) {
          return {
            ...task,
            hasFinishedTask: true,
          }
        }
        return task
      })
      return tasksUpdated
    })
  }

  function handleExcludeTask(id: number) {
    onUpdateTask(prevState => {
      const tasksUpdated = prevState.filter(task => task.id !== id)
      return tasksUpdated
    })
  }

  return (
    <View style={[styles.container, hasFinishedTask && styles.styleContainerFinishedTask]}>
      <TouchableOpacity onPress={() => handleFinishTask(id)} style={[styles.radioButton, hasFinishedTask && styles.styleRadioButtonFinishedTask]}>
        {hasFinishedTask && <Check size={10} color="#FFF" />}
      </TouchableOpacity>
      <Text style={[styles.taskTitle, hasFinishedTask && styles.taskTitleFinishedTask]}>
        {name}
      </Text>
      <TouchableOpacity onPress={() => handleExcludeTask(id)} style={styles.excludeTaskButton}>
        <Trash size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
