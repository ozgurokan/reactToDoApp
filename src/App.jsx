import Form from './components/Form';
import List from './components/List'; 
import Footer from './components/Footer';
import './App.css'
import { useState,useEffect } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [filter,setFilter] = useState("all");

  const newTask = (taskName) => {
    const taskAddedList = [{
      id: Math.round(Math.random() * 999999),
      task:taskName,
      taskStatus:false
    },...tasks];

    setTasks(taskAddedList);
  };

  const deleteTaskByID = (id) => {
    const afterDeleteList = tasks.filter((element) => {
      return element.id !== id;
    })

    setTasks(afterDeleteList);
  };
  
  const changeTaskStatus = (id) => {
    const changedElementList = tasks.filter((element) => {
      if(element.id === id){
        element.taskStatus = !element.taskStatus;
      }
      return element;
    });
    setTasks(changedElementList);

  }


  const findActiveTaskCount = () => {
    let count = 0;
    tasks.map((element) => {
      if(!element.taskStatus) {
        count++;
      };
    })
    return count;
  }
  
  useEffect(() =>{
    setCounter(findActiveTaskCount())
  },[tasks])

  const deleteAllCompletedTasks = () => {
    const cleanList = tasks.filter((element) => {
      return !element.taskStatus; 
    })

    setTasks(cleanList);

  }



  return (
    <>
      <section className="todoapp">

          <header className="header">

              <Form createTask={newTask} />

          </header>

      
      <section className="main">
            <List tasks={tasks} filter={filter} onDelete={deleteTaskByID} onChangeStat={changeTaskStatus} />
      </section>

      <Footer activeTaskCount={counter} deleteAllCompletedTask={deleteAllCompletedTasks} filter={filter} setFilter={setFilter}/>
      </section>
    </>
  )
}

export default App
