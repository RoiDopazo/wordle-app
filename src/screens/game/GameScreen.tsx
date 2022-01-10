import React, { useState, useRef } from 'react';
import WTextInputRow from 'components/TextInputRow/WTextInputRow';
import { NUM_ATTEMPTS, NUM_CHARACTER_PER_WORD } from 'utils/config';
import { View } from 'react-native';
import produce from 'immer';
import { computeValidation, getKeyboardStatus } from 'utils/helpers';
import { validationType } from 'types/GameTypes';
import WButton from 'components/Button/WButton';
import styles from './GameScreen-styles';
import WKeyboard from 'components/Keyboard/WKeyboard';
import WTypography from 'components/Typography/WTypography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const solutionSample = 'TEXTO';

const GameScreen = () => {
  const [attemptWords, setAttemptWords] = useState<string[]>(
    Array(NUM_ATTEMPTS).fill('_'.repeat(NUM_CHARACTER_PER_WORD))
  );
  const [attempt, setAttempt] = useState<number>(0);
  const [validations, setValidations] = useState<validationType[][]>(
    Array(NUM_ATTEMPTS).fill('_'.repeat(NUM_CHARACTER_PER_WORD))
  );
  const scrollRef = useRef<KeyboardAwareScrollView>();
  const wasLastTry = attempt >= NUM_ATTEMPTS;

  const handleUpdateWord = (newWord: string, index: number) => {
    setAttemptWords(
      produce(attemptWords, (draftState) => {
        draftState[index] = newWord;
      })
    );
  };

  const handleCheckWord = async () => {
    const currentWord = attemptWords[attempt];
    const computedValidations = computeValidation(solutionSample, currentWord);
    setValidations(
      produce(validations, (draftState) => {
        draftState[attempt] = computedValidations;
      })
    );
    setAttempt((_attempt) => _attempt + 1);
    scrollRef.current?.scrollToEnd(true);
  };

  const rowComponents = Array.from({ length: wasLastTry ? NUM_ATTEMPTS : attempt + 1 });

  return (
    <View style={styles.outerContainer}>
      <KeyboardAwareScrollView ref={scrollRef as any}>
        <View style={styles.innerContainer}>
          <View>
            <WTypography fontSize="h-lg" family="Monoton" light>
              Wordle
            </WTypography>
            {rowComponents.map((_, index) => {
              return (
                <WTextInputRow
                  key={`row-${index}`}
                  index={index}
                  attempt={attempt}
                  word={attemptWords[index]}
                  onUpdateWord={(currentWord) => handleUpdateWord(currentWord, index)}
                  validations={validations[index]}
                />
              );
            })}

            <View style={styles.buttonContainer}>
              <WButton title="Comprobar" onPress={handleCheckWord} variant="success" disabled={wasLastTry} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.keyboardContainer}>
        <WKeyboard status={getKeyboardStatus({ attemptWords, validations })} />
      </View>
    </View>
  );
};

export default GameScreen;
