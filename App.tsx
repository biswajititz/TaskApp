import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
//import HomeScreen from './screens/HomeScreen';
import {SafeAreaView, ScrollView} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
