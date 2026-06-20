import { useState , useRef } from 'react';
import HomeScreen from './HomeScreen';

export default function TodoApp()
{
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Learn React Native Events', date: 'May 20, 2024', completed: false },
    { id: '2', title: 'Build To-Do App', date: 'May 21, 2024', completed: false },
    { id: '3', title: 'Practice Styling', date: 'May 22, 2024', completed: false },
    { id: '4', title: 'Explore Prop Drilling', date: 'May 18, 2024', completed: true },
  ]);

  const [selectedFilter , setSelectedFilter] = useState('All');
  const [inputValue , setInputValue] = useState('');
  const inputRef = useRef(null);

const handleAddTask = () => {
  const title = inputValue.trim();
  if(title !== '')
  {
    const newTask = {
      id: Date.now().toString(),
      title: title,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      completed: false
    }
    setTasks(tasks => [...tasks, newTask])
    setInputValue('');
  }
}

const handleToggleTask = (id) => {
  setTasks(tasks => tasks.map(task => 
  task.id === id ? {...task , completed: !task.completed} : task))
}

const handleDeleteTask = (id) => {
  setTasks(tasks => tasks.filter(task => task.id !== id))
}

const handlePlusPress = () => {
  if(inputRef.current)
  {
    inputRef.current.focus();
  }
}

  return(
    <HomeScreen
      userName="Sudeshna"
      tasks={tasks}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onAddTask={handleAddTask}
      onToggleTask={handleToggleTask}
      onDeleteTask={handleDeleteTask}
      onPlusPress={handlePlusPress}
      inputRef={inputRef} />
  )
}