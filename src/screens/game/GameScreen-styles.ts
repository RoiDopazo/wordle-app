import { StyleSheet } from 'react-native';
import theme from 'theme';

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  keyboardContainer: {
    borderColor: theme.palette.grey.dark,
    borderWidth: 1,
    padding: 20,
    display: 'flex',
    marginVertical: 20
  },
  outerContainer: {
    display: 'flex',
    flex: 1
  },
  innerContainer: {
    display: 'flex',
    marginBottom: 20,
    flex: 1
  },
  title: {
    fontFamily: theme.fonts.Monoton,
    color: theme.palette.light,
    fontSize: 44
  }
});

export default styles;
