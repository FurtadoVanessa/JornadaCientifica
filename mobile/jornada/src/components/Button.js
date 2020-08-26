import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
export const ButtonStyled = styled(TouchableOpacity)`
  /* Adapt the colors based on primary prop */
  background: gray;
  color: gray;

  font-size: 14px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
