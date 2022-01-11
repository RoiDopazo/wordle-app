import WButton from 'components/Button/WButton';
import WTypography from 'components/Typography/WTypography';
import React from 'react';
import { Modal, View } from 'react-native';
import styles from './WEndModal-styles';

interface WEndModalDialogProps {
  isOpen: boolean;
  solution: string;
  isVictory?: boolean;
  onPlayAgain: () => void;
}

const WEndModalDialog: React.FC<WEndModalDialogProps> = ({ isOpen, solution, isVictory = false, onPlayAgain }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <WTypography fontSize="h-md">{isVictory ? '¡Victoria!' : 'Te ha faltado poco'}</WTypography>

          <View>
            <WTypography fontSize="p-lg">La palabra que estábamos buscando era: </WTypography>
            <WTypography fontSize="h-sm">{solution.toUpperCase()}</WTypography>
          </View>

          <View>
            <WButton title="Jugar de nuevo" onPress={onPlayAgain} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WEndModalDialog;
