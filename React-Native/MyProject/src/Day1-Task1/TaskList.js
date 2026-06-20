import { FlatList, View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem'
export default function TaskList({ tasks, selectedFilter, onToggleTask, onDeleteTask })
{
  const filteredTasks = selectedFilter === 'All' ? tasks : tasks.filter(t => selectedFilter === 'Pending' ? !t.completed : t.completed);
  return (
    <View style= {styles.taskListContainer}>
    <FlatList
      data={filteredTasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  taskListContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
})