import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/HomeScreen'
import TaskScreen from './src/TaskScreen'
import { Provider } from 'react-redux' 
import store from './src/models/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  )
}
export default App

const StackScreen = createNativeStackNavigator()

const AppStack = () => {
  return (
    <StackScreen.Navigator>
      <StackScreen.Screen name="Home" component={HomeScreen} />
      <StackScreen.Screen name="Task" component={TaskScreen} />
    </StackScreen.Navigator>
  )
}
