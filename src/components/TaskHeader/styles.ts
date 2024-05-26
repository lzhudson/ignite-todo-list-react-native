import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 33,
  },
  containerItem: {
    flexDirection: 'row',
  },
  itemLabel: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemLabelPurple: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemQuantityContainer: {
    backgroundColor: '#333333',
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 999,
    marginLeft: 8,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemQuantity: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',
  }
})