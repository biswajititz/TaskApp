import React from 'react';
import { View, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CompleteTask from '../components/CompleteTask';

const CompleteTaskScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <CompleteTask />
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

export default CompleteTaskScreen;
