import React from 'react';
import styled from 'styled-components';
import {TextInput, Text} from 'react-native';

const TextInputStyled = styled(TextInput)`
  background-color: #ffff;
  width: 95%;
  height: 40px;
  margin: 10px;
  border: 1px dashed ${props => (props.red ? '#E00' : '#000000')};
  border-radius: 10px;
`;

const TextStyled = styled(Text)`
  color: ${props => (props.red ? '#E00' : '#000000')};
  font-size: 18px;
  font-weight: bold;
`;

export const InputStyled = ({
  text,
  secureTextEntry,
  onSubmitEditing,
  onChangeText,
  red,
}) => {
  return (
    <>
      <TextStyled red={red}>{text}</TextStyled>
      <TextInputStyled
        red={red}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
      />
    </>
  );
};
