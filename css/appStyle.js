import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 20,
    marginVertical: 10,
  },
  errorMsg: {
    color: '#b00020',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 11,
    marginTop: 7,
  },
  input: {
    borderColor: '#a7a2ae',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
