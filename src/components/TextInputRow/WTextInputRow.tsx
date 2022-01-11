import React, { useState, useEffect, useRef } from 'react';
import WTextInput from 'components/TextInput/WTextInput';
import { TextInput, View } from 'react-native';
import styles from './WTextInputRow-style';
import { setCharAt } from 'utils/helpers';
import { NUM_CHARACTER_PER_WORD } from 'utils/config';
import { validationType } from 'types/GameTypes';

interface IWTextInputRowProps {
  index: number;
  attempt: number;
  word: string;
  onUpdateWord: (word: string) => void;
  validations: validationType[];
}

const WTextInputRow: React.FC<IWTextInputRowProps> = ({ index, attempt, word, onUpdateWord, validations }) => {
  const [shouldValidateInput, setShouldValidateInput] = useState<boolean>(false);
  const inputsRefs = useRef<TextInput[]>([]);
  const row = Array.from({ length: NUM_CHARACTER_PER_WORD });

  useEffect(() => {
    if (attempt > index) {
      setShouldValidateInput(true);
    }
  }, [attempt, index, shouldValidateInput]);

  const handleChangeChar = (textInput: string, textIndex: number) => {
    const isAvailableCharRegex = '^[a-zA-Z]+$';

    if (textInput === '') {
      if (word[textIndex] === '_' && textIndex > 0) {
        inputsRefs.current[textIndex - 1].focus();
      }
      const newWord = setCharAt(word, textIndex, '_');
      onUpdateWord(newWord);
    }

    if (!textInput.match(isAvailableCharRegex)) return;
    const newWord = setCharAt(word, textIndex, textInput);
    const isLastChar = textIndex >= NUM_CHARACTER_PER_WORD - 1;
    onUpdateWord(newWord.toUpperCase());
    if (!isLastChar) {
      inputsRefs.current[textIndex + 1].focus();
    } else {
      inputsRefs.current[textIndex].blur();
    }
  };

  const handleKeyPress = ({ key, textIndex }: { key: string; textIndex: number }) => {
    if (key === 'Backspace' && word[textIndex] === '_') {
      if (textIndex > 0) {
        inputsRefs.current[textIndex - 1].focus();
      }
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
            onKeyPress={handleKeyPress}
          />
        );
      })}
    </View>
  );
};

export default WTextInputRow;
