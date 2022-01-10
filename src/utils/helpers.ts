import { validationType } from 'types/GameTypes';
import { NUM_CHARACTER_PER_WORD } from './config';

export const setCharAt = (str: string, index: number, chr: string) => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
};

export const wait = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const computeValidation = (solution: string, currentWord: string): validationType[] => {
  const validations: validationType[] = Array(NUM_CHARACTER_PER_WORD).fill('fail');

  for (var i = 0; i < solution.length; i++) {
    const solutionChar = solution[i];
    const wordChar = currentWord[i];

    // Correct! The char is the correct one
    if (solutionChar === wordChar) {
      validations[i] = 'correct';
    }

    // Fail! The char is not the correct one
    if (solutionChar !== wordChar) {
      // We need to check if the char is in any other position
      for (var j = 0; j < solution.length; j++) {
        if (solution[j] !== currentWord[j] && solution[j] === wordChar) {
          validations[i] = 'wrong_pos';
        }
      }
    }
  }
  return validations;
};

export const getKeyboardStatus = ({
  attemptWords,
  validations
}: {
  attemptWords: string[];
  validations: validationType[][];
}) => {
  const correctChars = new Set<string>();
  const wrongPosChars = new Set<string>();
  const failChars = new Set<string>();

  for (let i = 0; i < attemptWords.length; i++) {
    const currentWord = attemptWords[i];

    for (let j = 0; j < currentWord.length; j++) {
      const currentChar = currentWord[j];

      if (currentChar !== '_') {
        if (validations[i][j] === 'correct') correctChars.add(currentChar);
        if (validations[i][j] === 'wrong_pos') wrongPosChars.add(currentChar);
        if (validations[i][j] === 'fail') failChars.add(currentChar);
      }
    }
  }

  return { correctChars, wrongPosChars, failChars };
};
