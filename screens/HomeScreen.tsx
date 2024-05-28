import React from 'react';
import { View, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TaskList from '../components/TaskList';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <TaskList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
