


function TaskItem({task,onDelete,onChangeStat}) {

	const handleDelete = () => {
		onDelete(task.id);
	};

	const handleStatusChange = () => {
		onChangeStat(task.id);
	};

    return (
        <>
            <li className={task.taskStatus ? "completed": "active"}>
				<div className="view">
					<input className="toggle" type="checkbox" onClick={handleStatusChange} checked={task.taskStatus}  readOnly/>
					<label>{task.task}</label>
					<button className="destroy" onClick={handleDelete}></button>
				</div>
			</li>
		</>
    );
}

export default TaskItem;