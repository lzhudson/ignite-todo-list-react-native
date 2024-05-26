import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native'

type Props = {
  hasFinishedTask: boolean
}

export function TaskItem({ hasFinishedTask } : Props) {
  

  return (
    <View style={[styles.container, hasFinishedTask && styles.styleContainerFinishedTask]}>
      <TouchableOpacity style={[styles.radioButton, hasFinishedTask && styles.styleRadioButtonFinishedTask]}>
        {hasFinishedTask && <Check size={10} color="#FFF" />}
      </TouchableOpacity>
      <Text style={[styles.taskTitle, hasFinishedTask && styles.taskTitleFinishedTask]}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity style={styles.excludeTaskButton}>
        <Trash size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
