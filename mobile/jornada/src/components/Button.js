import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

export const ButtonContainer = styled(TouchableOpacity)`
  background-color: #2f9e41;
  width: 320px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffff;
`;
