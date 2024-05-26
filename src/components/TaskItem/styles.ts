import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    padding: 12,
    paddingRight: 8,
    borderRadius: 8,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  styleContainerFinishedTask: {
    backgroundColor: '#262626',
    borderColor: '#262626',
  },
  styleRadioButtonFinishedTask: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#4EA8DE',
  },
  taskTitle: {
    fontSize: 14,
    color: '#F2F2F2',
    maxWidth: 250,
    lineHeight: 19.6,
    fontFamily: 'Inter_400Regular'
  },
  taskTitleFinishedTask: {
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  excludeTaskButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto'
  }
})