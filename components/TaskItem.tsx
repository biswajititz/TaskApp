import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTaskComplete } from '../redux/slices/tasksSlice';
import { AppDispatch } from '../redux/store';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleTaskComplete(task));
  };

  return (
    <>
      {/* { task.completed ? null :   */}
        <View style={styles.item}>
          <Text style={styles.taskHeading}>
            Task {task.id}
          </Text>
          <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Text>
          <View style={styles.btnGroup}>
            <Button buttonStyle={styles.btnStyle}  titleStyle={styles.btnTitleStyle} title={task.completed ? "Undo" : "Complete"} onPress={handleToggleComplete} />
            <Button buttonStyle={styles.btnStyle}  titleStyle={styles.btnTitleStyle} title="Delete" onPress={handleRemoveTask} />
          </View>
          
        </View>
        
      {/* } */}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor:"#ccc",
    marginBottom:15,
  },
  btnStyle:{
    backgroundColor:"green",
    padding: 5,
    marginLeft:10,
  },
  btnTitleStyle:{
    fontSize: 12,
  },
  btnGroup:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:10,

  },
  taskHeading:{
    fontSize: 16
  }
});

export default TaskItem;
