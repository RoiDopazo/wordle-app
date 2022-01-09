import React, { useState, useEffect, useRef } from 'react';
import WTextInput from 'components/TextInput/WTextInput';
import { TextInput, View } from 'react-native';
import styles from './WTextInputRow-style';
import { setCharAt } from 'utils/helpers';
import { NUM_CHARACTER_PER_WORD } from 'utils/config';
import { validationType } from 'types/GameTypes';

interface IWTextInputRow {
  index: number;
  attempt: number;
  word: string;
  onUpdateWord: (word: string) => void;
  validations: validationType[];
}

const WTextInputRow: React.FC<IWTextInputRow> = ({ index, attempt, word, onUpdateWord, validations }) => {
  const [shouldValidateInput, setShouldValidateInput] = useState<boolean>(false);
  const inputsRefs = useRef<TextInput[]>([]);
  const row = Array.from({ length: NUM_CHARACTER_PER_WORD });

  useEffect(() => {
    if (shouldValidateInput) return;
    if (attempt > index) {
      setShouldValidateInput(true);
    }
  }, [attempt, index, shouldValidateInput]);

  const handleChangeChar = (textInput: string, textIndex: number) => {
    const isAvailableCharRegex = '^[a-zA-Z]+$';
    if (!textInput.match(isAvailableCharRegex)) return;

    const newWord = setCharAt(word, textIndex, textInput);
    const isLastChar = textIndex >= NUM_CHARACTER_PER_WORD - 1;
    onUpdateWord(newWord.toUpperCase());
    inputsRefs.current[textIndex].blur();
    if (!isLastChar) {
      inputsRefs.current[textIndex + 1].focus();
    }
  };

  return (
    <View style={styles.row}>
      {row.map((_, currentIndex) => {
        return (
          <WTextInput
            setRef={(el: any) => ((inputsRefs.current[currentIndex] as any) = el)}
            key={currentIndex}
            index={currentIndex}
            char={word[currentIndex]}
            validation={validations[currentIndex]}
            onChangeChar={handleChangeChar}
            shouldValidate={shouldValidateInput}
          />
        );
      })}
    </View>
  );
};

export default WTextInputRow;
