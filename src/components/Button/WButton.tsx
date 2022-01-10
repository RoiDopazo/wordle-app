import WTypography from 'components/Typography/WTypography';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './WButton-styles';

type buttonVariantType = 'default' | 'success';

interface IWButtonProps {
  title: string;
  onPress: () => void;
  variant?: buttonVariantType;
  disabled?: boolean;
}

const buttonVariantStyleLookUp: Record<buttonVariantType, any> = {
  success: styles.buttonSuccess,
  default: styles.button
};

const WButton: React.FC<IWButtonProps> = ({ title, onPress, variant = 'default', disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, buttonVariantStyleLookUp[variant], disabled && styles.buttonDisabled]}
      onPress={onPress}
    >
      <WTypography fontSize="p-lg" light>
        {title}
      </WTypography>
    </TouchableOpacity>
  );
};

export default WButton;
