import React from 'react';
import { Text, View } from 'react-native';
import { QWERTY_KEYBOARD } from 'utils/config';
import styles from './WKeyboard-styles';

interface WKeyboardProps {
  status: { correctChars: Set<string>; wrongPosChars: Set<string>; failChars: Set<string> };
}

const WKeyboard: React.FC<WKeyboardProps> = ({ status }) => {
  const keyboard = QWERTY_KEYBOARD;

  return (
    <View>
      {keyboard.map((row: string[], index) => {
        return (
          <View key={`keyboard-row${index}`} style={styles.rowContainer}>
            {row.map((char) => {
              return (
                <View
                  key={`keyboard-char-${char}`}
                  style={[
                    styles.charContainer,
                    status.failChars.has(char) && styles.charFail,
                    status.wrongPosChars.has(char) && styles.charWrongPos,
                    status.correctChars.has(char) && styles.charCorrect
                  ]}
                >
                  <Text style={[styles.charText, status.failChars.has(char) && styles.charTextLight]}>{char}</Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default WKeyboard;
