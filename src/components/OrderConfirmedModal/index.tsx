import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { StatusBar } from 'expo-status-bar';
import { Container, OkButton } from './styles';

interface OderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style='light' />
      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12, marginBottom: 4 }}>Pedido confirmado</Text>
        <Text opacity={0.9} color="#fff">O pedido já entrou na fila de produção!</Text>

        <OkButton
          onPress={onOk}
        >
          <Text color="#D73035" weight='600'>ok</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}