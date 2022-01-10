import { StyleSheet } from 'react-native';
import theme from 'theme';

const styles: any = StyleSheet.create({
  text: {
    color: theme.palette.black.dark,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  'fontsize-h-lg': {
    fontSize: 48
  },
  'fontsize-h-md': {
    fontSize: 36
  },
  'fontsize-h-sm': {
    fontSize: 28
  },
  'fontsize-p-lg': {
    fontSize: 16
  },
  'fontsize-p-md': {
    fontSize: 14
  },
  'fontsize-p-sm': {
    fontSize: 12
  },
  'family-Monoton': {
    fontFamily: theme.fonts.Monoton
  },
  'family-Prompt': {
    fontFamily: theme.fonts.Prompt
  },
  light: {
    color: theme.palette.light
  },
  'align-self-flex-start': {
    alignSelf: 'flex-start'
  },
  'align-self-flex-end': {
    alignSelf: 'flex-end'
  },
  'align-self-center': {
    alignSelf: 'center'
  },
  'font-weight-extra-bold': {
    fontFamily: theme.fonts['Prompt-ExtraBold']
  },
  'font-weight-bold': {
    fontFamily: theme.fonts['Prompt-Bold']
  },
  'font-weight-semi-bold': {
    fontFamily: theme.fonts['Prompt-SemiBold']
  },
  'font-weight-medium': {
    fontFamily: theme.fonts['Prompt-Medium']
  },
  'font-weight-regular': {
    fontFamily: theme.fonts.Prompt
  },
  'font-weight-light': {
    fontFamily: theme.fonts['Prompt-Light']
  },
  'font-weight-extra-light': {
    fontFamily: theme.fonts['Prompt-ExtraLight']
  }
});

export default styles;
