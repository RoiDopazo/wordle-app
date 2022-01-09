import React, { useState } from 'react';
import WTextInputRow from 'components/TextInputRow/WTextInputRow';
import { NUM_CHARACTER_PER_WORD } from 'utils/config';
import { TouchableOpacity, Text } from 'react-native';
import produce from 'immer';
import { computeValidation } from 'utils/helpers';
import { validationType } from 'types/GameTypes';

const solutionSample = 'TEXTO';

const GameScreen = () => {
  const [wordSolution, setWordSolution] = useState<string[]>(
    Array(NUM_CHARACTER_PER_WORD).fill('_'.repeat(NUM_CHARACTER_PER_WORD))
  );
  const [attempt, setAttempt] = useState<number>(0);
  const [validations, setValidations] = useState<validationType[]>(
    Array(NUM_CHARACTER_PER_WORD).fill('_'.repeat(NUM_CHARACTER_PER_WORD))
  );

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

  const rowComponents = Array.from({ length: attempt + 1 });

  return (
    <>
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

      <TouchableOpacity onPress={handleCheckWord}>
        <Text>Check</Text>
      </TouchableOpacity>
    </>
  );
};

export default GameScreen;
