import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Index from './rotas/index'

const App = () => {
    return(
        <NavigationContainer>
            <Index />
        </NavigationContainer>
    )
}

export default App