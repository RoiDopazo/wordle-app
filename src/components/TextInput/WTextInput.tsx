import React, { useEffect, useRef, useState } from 'react';
import { Animated, TextInput } from 'react-native';
import styles, { BOX_SIZE, BORDER_SIZE } from './WTextInput-styles';
import { ANIMATION_DURATION } from 'utils/config';
import { wait } from 'utils/helpers';
import theme from 'theme';
import { validationType } from 'types/GameTypes';
import { ANIMATION_DELAY } from 'utils/config';

interface IWTextInput {
  setRef?: (el: any) => void;
  index: number;
  char: string;
  onChangeChar: (textInput: string, index: number) => void;
  shouldValidate: boolean;
  validation: validationType;
}

const WTextInput: React.FC<IWTextInput> = ({ setRef, index, char, onChangeChar, shouldValidate, validation }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textScaleAnimation = useRef(new Animated.Value(0)).current;
  const heighAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!shouldValidate) return;

    wait(index * ANIMATION_DELAY).then(() => {
      Animated.timing(heighAnimation, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: false
      }).start(() =>
        Animated.timing(heighAnimation, {
          toValue: 2,
          duration: ANIMATION_DURATION,
          useNativeDriver: false
        }).start()
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heighAnimation, shouldValidate]);

  const animateTextScale = () => {
    Animated.timing(textScaleAnimation, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: true
    }).start(() =>
      Animated.timing(textScaleAnimation, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true
      }).start()
    );
  };

  const handleChangeText = (textInput: string) => {
    onChangeChar(textInput, index);
    animateTextScale();
  };

  const flipBackgroundStyle = {
    ...styles.flipBackground,
    height: heighAnimation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, BOX_SIZE - BORDER_SIZE * 2, 0]
    })
  };

  const textScaleStyle = {
    transform: [
      {
        scale: textScaleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5]
        })
      }
    ]
  };

  const containerStyle = {
    ...styles.inputContainer,
    ...(isFocused ? styles.isFocused : {}),
    backgroundColor: heighAnimation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [
        theme.palette.black.light,
        theme.palette.black.light,
        validation === 'correct'
          ? theme.palette.green
          : validation === 'wrong_pos'
          ? theme.palette.orange
          : theme.palette.black.dark
      ]
    })
  };

  return (
    <Animated.View style={containerStyle}>
      <Animated.View style={flipBackgroundStyle} />
      <Animated.View style={textScaleStyle}>
        <TextInput
          ref={setRef}
          style={styles.textInput}
          value={char === '_' ? '' : char}
          maxLength={1}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleChangeText}
          selectTextOnFocus
        />
      </Animated.View>
    </Animated.View>
  );
};

export default WTextInput;
