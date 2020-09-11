import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, Dimensions} from 'react-native';

export const ButtonContainer = styled(TouchableOpacity)`
  background-color: #2f9e41;
  width: 95%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 3%;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffff;
`;

export const StyledButton = ({text, onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
