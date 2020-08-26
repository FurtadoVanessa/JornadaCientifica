import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';
export const ButtonContainer = styled(TouchableOpacity)`
  background-color: #2f9e41;
  padding: 10px 200px;
  margin: 10px;
  border-radius: 10px;
`;

export const ButtonText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #ffff;
`;
