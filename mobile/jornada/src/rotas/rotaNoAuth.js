import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuLogin from '../telas/menus/menuLogin'
import Login from '../telas/login/login'


const AuthStack = createStackNavigator()

function RotaNoAuth() {
  return (
    
      <AuthStack.Navigator initialRouteName={MenuLogin}>
        <AuthStack.Screen name="Menu Login" component={MenuLogin} />
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    
  )
}

export default RotaNoAuth