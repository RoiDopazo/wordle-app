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
    marginTop: 20
  },
  outerContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default styles;
