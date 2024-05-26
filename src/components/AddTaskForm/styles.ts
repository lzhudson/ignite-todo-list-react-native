import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    width: '100%',
    flexDirection: 'row',
    marginTop: -27,
  },
  inputAddTask: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    fontFamily: 'Inter_400Regular'
  },
  buttonAddTask: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 4,
  }
})