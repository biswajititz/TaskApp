import React, { useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchTasks, addTask } from '../redux/slices/tasksSlice';
import TaskItem from './TaskItem';
import { useNavigation } from '@react-navigation/native';

const TaskList: React.FC = () => {
  const [taskText, setTaskText] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const _renderItem = ({ item }) => {
    if (item.completed) {
        return null; 
    }
    return <TaskItem task={item} />;
  };

  console.log("------",tasks);
   

  return (
    <View style={styles.container}>
      <View style={styles.allTask}>
        <Text style={styles.heading}>All Task</Text>
        <Button  buttonStyle={styles.btnStyle}  titleStyle={styles.btnTitleStyle} title="View Complete Task" onPress={() => navigation.navigate('CompleteTask', { screen: 'CompleteTask' })} />
        <Button  buttonStyle={styles.btnStyle}  titleStyle={styles.btnTitleStyle} title="Add Task" onPress={() => navigation.navigate('AddTask', { screen: 'AddTask' })} />
      </View>
      <FlatList
        data={tasks}
       // renderItem={({ item }) => <TaskItem task={item} /> }
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading:{
    fontSize: 18
  },
  allTask:{
    paddingBottom:15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnStyle:{
    backgroundColor:"#aaa",
    padding: 5
  },
  btnTitleStyle:{
    fontSize: 14,
  }


});

export default TaskList;
