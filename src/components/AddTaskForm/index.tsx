import { TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { PlusCircle } from "phosphor-react-native";

export function AddTaskForm() {
  return (
    <View style={style.container}>
      <TextInput 
        style={style.inputAddTask} 
        placeholder="Adicione uma nova tarefa" 
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={style.buttonAddTask}>
        <PlusCircle color="#F2F2F2" size={18} />
      </TouchableOpacity>
    </View>
  )
}