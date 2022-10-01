import React from "react";
import { useNavigate } from "react-router-dom";

function DropdownFavorites({name}) {
    const navigate = useNavigate();

	
  return (
    <Dropdown>
		<Dropdown.Toggle variant="success" id="dropdown-basic">
			Dropdown Button
		</Dropdown.Toggle>

		<Dropdown.Menu>
					{
						tasks.map((task,index)=>{
							return(
								<Dropdown.Item href="#/action-1" key={index} >{task}</Dropdown.Item>
									// <div onClick={(e) => handleDelete(index)}>
									// 	<i className="far fa-trash-alt deleteButton"></i>
									// </div>
							)
						})
						
					}
		</Dropdown.Menu>
		
		<Dropdown.Menu>
			<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
			<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
			<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownFavorites;