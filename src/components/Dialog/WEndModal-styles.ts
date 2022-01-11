import { StyleSheet } from 'react-native';
import theme from 'theme';

const styles = StyleSheet.create({
  modalContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  contentContainer: {
    backgroundColor: theme.palette.light,
    borderRadius: 5,
    height: '50%',
    width: '85%',
    maxHeight: 400,
    maxWidth: 400,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

export default styles;
