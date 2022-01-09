import React, { useState } from 'react';
import WTextInputRow from 'components/TextInputRow/WTextInputRow';
import { NUM_ITEMS_PER_ROW } from 'utils/config';
import { TouchableOpacity, Text } from 'react-native';

const solutionSample = 'TEXTO';

const GameScreen = () => {
  const [word, setWord] = useState<string>('_'.repeat(NUM_ITEMS_PER_ROW));
  const [attempt, setAttempt] = useState<number>(0);

  const handleUpdateWord = (newWord: string) => {
    setWord(newWord);
  };

  const handleCheckWord = () => {
    setAttempt((_attempt) => _attempt + 1);
  };

  return (
    <>
      <WTextInputRow
        index={0}
        attempt={attempt}
        word={word}
        onUpdateWord={handleUpdateWord}
        solution={solutionSample}
      />
      <TouchableOpacity onPress={handleCheckWord}>
        <Text>Check</Text>
      </TouchableOpacity>
    </>
  );
};

export default GameScreen;
