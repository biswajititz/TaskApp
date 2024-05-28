import React, { useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTask } from '../redux/slices/tasksSlice';
import { useNavigation } from '@react-navigation/native';

const TaskList: React.FC = () => {
  const [taskText, setTaskText] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();



  const handleAddTask = () => {
    if (taskText.trim().length > 0) {
      dispatch(addTask(taskText));
      setTaskText('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
        placeholder="Add a new task"
      />

      <Button  title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },

});

export default TaskList;
