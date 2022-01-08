import { StyleSheet } from 'react-native';
import theme from 'theme';

const styles = StyleSheet.create({
  textInput: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.black.light,
    color: theme.palette.white,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderColor: theme.palette.grey.medium,
    borderWidth: 3
  },
  isFocused: {
    backgroundColor: theme.palette.black.dark
  }
});

export default styles;
