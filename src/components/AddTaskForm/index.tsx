import { TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../../screens/Home";

type Props = {
  onAddTask: Dispatch<SetStateAction<Task[]>>
}

export function AddTaskForm({ onAddTask } : Props) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleAddTask() {
    const task = {
      id: Math.random(),
      title: taskTitle,
      hasFinishedTask: false
    };
  
    onAddTask(prevState => [...prevState, task]);
    setTaskTitle('');
  }

  return (
    <View style={style.container}>
      <TextInput 
        style={style.inputAddTask} 
        placeholder="Adicione uma nova tarefa" 
        placeholderTextColor="#808080"
        value={taskTitle}
        onChangeText={(value) => setTaskTitle(value)}
      />
      <TouchableOpacity onPress={handleAddTask} style={style.buttonAddTask}>
        <PlusCircle color="#F2F2F2" size={18} />
      </TouchableOpacity>
    </View>
  )
}