import React from 'react'
import { useState } from 'react';
import UserList from './UserList';
import EmployeeCard from './EmployeeCard';
import TodoItem from './TodoItem';
import './App.css';
import Child from './Child';

export default function App() {
  const [person,setPerson]=useState({name:"Ravinder",age:22});
  const [employee,setEmployee]=useState({name:"Ravinder",age:22,designation:"Software Engineer",location:"Bangalore"});
  const [task1,setTask1]=useState({title:"Complete React Assignment",status:"Pending", Priority:"High"});
  const [task2,setTask2]=useState({title:"Attend Team Meeting",status:"Completed", Priority:"Medium"});
  const [task3,setTask3]=useState({title:"Revise Props Topic",status:"Pending", Priority:"Low"});
  const [data,setData]=useState("Hello from App Component");
  const [people, setPeople] = useState([{ name: "Ravinder", age: 22 },
  { name: "Sandeep", age: 25 },
  { name: "Anjali", age: 28 },
  { name: "Vikram", age: 30 },
  { name: "Priya", age: 27 }]
  );

  return (
    <div className='app'>
      {/* <UserList person={person}/> */}
      {/* <EmployeeCard employee={employee}/> */}
      {/* <div className='todo-list'>
      <TodoItem task={task1}/>
      <TodoItem task={task2}/>
      <TodoItem task={task3}/>
      </div> */}
      <div style={{backgroundColor:"lightpink",border:"2px solid red",padding:"10px",margin:"10px"}}>
        <h1>I am Parent Component</h1>
        <Child people={people}/>
      </div>
      
    </div>
  )
}
