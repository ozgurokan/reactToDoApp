import { useState,useEffect } from "react";



function Form({createTask}) {

    const [task, setTask] = useState("");



    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(task);
        setTask("");
    };


    return ( 
        <div>
            <h1>todos</h1>
		<form onSubmit={handleSubmit}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus value={task} onChange={handleChange}/>
            
		</form>
        </div>
     );
}

export default Form;