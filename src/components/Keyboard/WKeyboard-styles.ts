import { StyleSheet } from 'react-native';
import theme from 'theme';

//TODO: Mediaquery
const CHAR_CONTAINER_WIDTH = 32;
const CHAR_CONTAINER_HEIGHT = 40;

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 4
  },
  charContainer: {
    maxWidth: CHAR_CONTAINER_WIDTH,
    width: '100%',
    height: CHAR_CONTAINER_HEIGHT,
    backgroundColor: theme.palette.grey.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderRadius: 4
  },
  charCorrect: {
    backgroundColor: theme.palette.green
  },
  charWrongPos: {
    backgroundColor: theme.palette.orange
  },
  charFail: {
    backgroundColor: theme.palette.black.dark
  },
  charText: {
    fontSize: 12,
    color: theme.palette.black.dark
  },
  charTextLight: {
    color: theme.palette.light
  }
});

export default styles;
