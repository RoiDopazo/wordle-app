import React, { useRef, useState } from 'react';
import WTextInput from 'components/TextInput/WTextInput';
import { TextInput, View } from 'react-native';
import styles from './WTextInputRow-style';
import { setCharAt } from 'utils/helpers';

const NUM_ITEMS_PER_ROW = 5;

const WTextInputRow = () => {
  const [word, setWord] = useState<string>('_'.repeat(NUM_ITEMS_PER_ROW));
  const inputsRefs = useRef<TextInput[]>([]);
  const row = Array.from({ length: NUM_ITEMS_PER_ROW });

  const handleChangeChar = (textInput: string, index: number) => {
    const isAvailableCharRegex = '^[a-zA-Z]+$';
    if (!textInput.match(isAvailableCharRegex)) return;

    const newWord = setCharAt(word, index, textInput);
    const isLastChar = index >= NUM_ITEMS_PER_ROW - 1;
    setWord(newWord.toUpperCase());
    inputsRefs.current[index].blur();
    if (!isLastChar) {
      inputsRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.row}>
      {row.map((_, index) => {
        return (
          <WTextInput
            setRef={(el: any) => ((inputsRefs.current[index] as any) = el)}
            key={index}
            index={index}
            char={word[index]}
            onChangeChar={handleChangeChar}
          />
        );
      })}
    </View>
  );
};

export default WTextInputRow;
