import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Index from './rotas/index';
import {AuthProvider} from './contexto/contextoAuth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
