import React, { useState } from 'react';
import WTextInputRow from 'components/TextInputRow/WTextInputRow';
import { NUM_ATTEMPTS, NUM_CHARACTER_PER_WORD } from 'utils/config';
import { View, ScrollView } from 'react-native';
import produce from 'immer';
import { computeValidation } from 'utils/helpers';
import { validationType } from 'types/GameTypes';
import WButton from 'components/Button/WButton';
import styles from './GameScreen-styles';

const solutionSample = 'TEXTO';

const GameScreen = () => {
  const [wordSolution, setWordSolution] = useState<string[]>(
    Array(NUM_ATTEMPTS).fill('_'.repeat(NUM_CHARACTER_PER_WORD))
  );
  const [attempt, setAttempt] = useState<number>(0);
  const [validations, setValidations] = useState<validationType[]>(
    Array(NUM_ATTEMPTS).fill('_'.repeat(NUM_CHARACTER_PER_WORD))
  );

  const wasLastTry = attempt >= NUM_ATTEMPTS;

  const handleUpdateWord = (newWord: string, index: number) => {
    setWordSolution(
      produce(wordSolution, (draftState) => {
        draftState[index] = newWord;
      })
    );
  };

  const handleCheckWord = async () => {
    const currentWord = wordSolution[attempt];
    const computedValidations = computeValidation(solutionSample, currentWord);
    setValidations(computedValidations);
    setAttempt((_attempt) => _attempt + 1);
  };

  const rowComponents = Array.from({ length: wasLastTry ? NUM_ATTEMPTS : attempt + 1 });

  return (
    <ScrollView>
      {rowComponents.map((_, index) => {
        return (
          <WTextInputRow
            key={`row-${index}`}
            index={index}
            attempt={attempt}
            word={wordSolution[index]}
            onUpdateWord={(currentWord) => handleUpdateWord(currentWord, index)}
            validations={validations}
          />
        );
      })}

      <View style={styles.buttonContainer}>
        <WButton title="Comprobar" onPress={handleCheckWord} variant="success" disabled={wasLastTry} />
      </View>
    </ScrollView>
  );
};

export default GameScreen;
