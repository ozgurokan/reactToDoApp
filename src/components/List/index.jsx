import '../../App.css';
import TaskItem from '../TaskItem';
import { useState,useEffect } from 'react';




function List({tasks, onDelete, onChangeStat,filter}) {


	const filteredTasks = (tasks) => {

		if(filter === "completed"){
			return tasks.filter((element) => {
				if(element.taskStatus){
					return element
				}
			})
		}
		if(filter === "active"){
			return tasks.filter((element) => {
				if(!element.taskStatus){
					return element
				}
			})
		}else{
			return tasks;
		}
	
	}

    return (
        <>
		<ul className="todo-list">
			{filteredTasks(tasks).map((element, i) => {
                return <TaskItem key={i} task={element} onDelete={onDelete} onChangeStat={onChangeStat} />
            })}
		</ul>

        
        </>
    );
}

export default List;