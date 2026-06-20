import { SafeAreaView , View } from 'react-native';
import Header from './Header'
import styles from './Style'
import WelcomeCard from './WelcomeCard'
import FilterTabs from './FilterTabs'
import TaskList from './TaskList'
import AddTaskBar from './AddTaskBar'
export default function HomeScreen({
userName,
tasks,
selectedFilter,
setSelectedFilter,
inputValue,
setInputValue,
onAddTask,
onToggleTask,
onDeleteTask,
onPlusPress,
inputRef,  
})
{
  const pendingCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;
  const counts = {
    All: tasks.length,
    Pending: pendingCount,
    Completed: completedCount,
  };
  return(
    <SafeAreaView style={styles.container}>
    <Header onPlusPress={onPlusPress}/>
    <WelcomeCard userName={userName} pendingCount={pendingCount}/>

    <FilterTabs 
          selectedFilter={selectedFilter} 
          setSelectedFilter={setSelectedFilter} 
          counts={counts} 
        />

    <TaskList 
          tasks={tasks} 
          selectedFilter={selectedFilter}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />

    <AddTaskBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          onAddTask={onAddTask}
          inputRef={inputRef}
        />
    </SafeAreaView>
  )
}