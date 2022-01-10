import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from './WTypography-styles';

interface WTypographyProps {
  children: React.ReactNode;
  fontSize?: 'h-lg' | 'h-md' | 'h-sm' | 'p-lg' | 'p-md' | 'p-sm';
  family?: 'Monoton' | 'Prompt';
  light?: boolean;
  style?: TextStyle;
  fontWeight?: 'extra-bold' | 'bold' | 'semi-bold' | 'medium' | 'regular' | 'light' | 'extra-light';
  alignSelf?: 'flex-start' | 'flex-end' | 'center';
}

const WTypography: React.FC<WTypographyProps> = ({
  style,
  children,
  fontSize = 'p-md',
  family = 'Prompt',
  fontWeight,
  light,
  alignSelf = 'center'
}) => {
  const textStyle = {
    ...styles.text,
    ...styles[`fontsize-${fontSize}`],
    ...styles[`family-${family}`],
    ...(light ? styles.light : {}),
    ...styles[`align-self-${alignSelf}`],
    ...styles[`font-weight-${fontWeight}`],

    ...style
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default WTypography;
