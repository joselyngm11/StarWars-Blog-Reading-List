import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/appContext";

function DropdownFavorites({name}) {
    const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	
  return (
    <Dropdown >
		<Dropdown.Toggle className="dropdownNavbar" variant="success" id="dropdown-basic">
			Favorites
		</Dropdown.Toggle>
		
		<Dropdown.Menu >
		{
						store.favorites.map((favorite,index)=>{
							return(
								<Dropdown.Item className="d-flex justify-content-between align-items-start" 
								key={index} 
								>
									<div className="ms-2 me-3">
										{favorite.name}
        							</div>
									<div onClick={() => actions.manageFavorites(favorite.name)}>
										<i className="far fa-trash-alt deleteButton "></i>
									</div>
								</Dropdown.Item>
							)
						})
						
					}
		</Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownFavorites;