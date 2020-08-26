import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';
export const ButtonContainer = styled(TouchableOpacity)`
  background-color: #2f9e41;
  width: 400px;
  height: 40px;
  padding-top: 3px; /* Gambiarra pra ficar no meio */
  margin: 10px;
  border-radius: 10px;
`;

export const ButtonText = styled(Text)`
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffff;
`;
