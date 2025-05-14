import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './Framework/Screens/HomeScreen';
import { StackNavigator } from './Framework/Navigators/Stack';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <StatusBar barStyle="dark-content" />
      <StackNavigator/>
     </SafeAreaView>
  );
}
