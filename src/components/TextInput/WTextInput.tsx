import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './WTextInput-styles';

interface IWTextInput {
  setRef?: (el: any) => void;
  index: number;
  char: string;
  onChangeChar: (textInput: string, index: number) => void;
}

const WTextInput: React.FC<IWTextInput> = ({ setRef, index, char, onChangeChar }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChangeText = (textInput: string) => {
    onChangeChar(textInput, index);
  };

  return (
    <TextInput
      ref={setRef}
      style={[styles.textInput, isFocused && styles.isFocused]}
      value={char === '_' ? '' : char}
      maxLength={1}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={handleChangeText}
      selectTextOnFocus
    />
  );
};

export default WTextInput;
