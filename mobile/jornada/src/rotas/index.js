import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import AuthContexto from '../contexto/contextoAuth';

import RotaNoAuth from './rotaNoAuth';
import RotaParticipante from './rotaParticipante';
import RotaAvaliador from './rotaAvaliador';
import RotaCantina from './rotaCantina';

const Rotas = () => {
  const {signed, loading} = useContext(AuthContexto);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return signed ? <RotaParticipante /> : <RotaNoAuth />;
};

export default Rotas;
