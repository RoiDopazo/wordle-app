import { StyleSheet } from 'react-native';
import theme from 'theme';

export const BOX_SIZE = 60;
export const BORDER_SIZE = 3;

const styles = StyleSheet.create({
  inputContainer: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.black.light,
    borderColor: theme.palette.grey.medium,
    borderWidth: BORDER_SIZE
  },
  textInput: {
    color: theme.palette.white,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    zIndex: 1,
    transform: [{ scale: 1 }]
  },
  flipBackground: {
    position: 'absolute',
    top: 0,
    height: 0,
    zIndex: 20,
    width: BOX_SIZE - BORDER_SIZE * 2,
    backgroundColor: theme.palette.black.light
  },
  isFocused: {
    backgroundColor: theme.palette.black.dark
  }
});

export default styles;
