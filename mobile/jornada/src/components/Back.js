import React from 'react';

import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const BackContainer = styled(TouchableOpacity)`
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
  width: 15%;
`;

export const BackView = styled(View)`
  width: 100%;
  justify-content: flex-start;
`;

export const Back = ({onPress, style}) => {
  return (
    <BackView>
      <BackContainer onPress={onPress} style={style}>
        <Icon name="arrow-left" size={32} color="#2f9e41" />
      </BackContainer>
    </BackView>
  );
};
