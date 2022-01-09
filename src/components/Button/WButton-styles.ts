import { StyleSheet } from 'react-native';
import theme from 'theme';

const BUTTON_HEIGHT = 48;

const styles = StyleSheet.create({
  button: {
    height: BUTTON_HEIGHT,
    backgroundColor: theme.palette.black.light,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  buttonSuccess: {
    backgroundColor: theme.palette.green
  },
  buttonDisabled: {
    opacity: 0.35
  },
  text: {
    fontSize: 16,
    color: theme.palette.white,
    fontWeight: '600'
  }
});

export default styles;
