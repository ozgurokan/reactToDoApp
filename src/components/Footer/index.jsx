import { useState } from "react";



function Footer({activeTaskCount,deleteAllCompletedTask,filter,setFilter}) {


    const clickFilter = (e) => {
    
        setFilter(e.target.innerHTML.toLowerCase());
    }
    
    return ( 
        <>
            <footer className="footer">
		<span className="todo-count">
			<strong> {activeTaskCount} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" onClick={clickFilter} className={filter==="all" ? "selected" : ""}>All</a>
			</li>
			<li>
				<a href="#/" onClick={clickFilter} className={filter==="active" ? "selected" : ""}>Active</a>
			</li>
			<li>
				<a href="#/" onClick={clickFilter} className={filter==="completed" ? "selected" : ""}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={deleteAllCompletedTask}>
			Clear completed
		</button>
	    </footer>
        </>
     );
}

export default Footer;