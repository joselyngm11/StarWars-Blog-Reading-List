import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Image } from "react-bootstrap";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [details, setDetails] = useState({});
	const { type,theid } = useParams();

	useEffect(() => {
		const getDetails = async () => {
			let response = await fetch(`https://swapi.dev/api/${type}/${theid}/`);
			let data = await response.json();
			setDetails(data);
			console.log(data);
		};
		// const getDescription = async ()=>{
		// 	let response2 = await fetch('https://swapi.dev/api/films/1/')
		// 	let data2 = await response2.json()
		// 	console.log(data2);
		// };
		// getDescription();
		getDetails();
	}, [])

	return (
		<div id="About" className="container text-center">
			<div className="row pb-5">
					<div className="col-4">
						<Image className="imgCard" src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${type == "people" ? theid : (theid+1)}.jpg`}/>
					</div>
					<div className="col-md-8">
						<h3 className="fw-bold" style={{fontSize: "37px", color: "white"}}>
							{details.name}
						</h3>
						<p className="mt-5" style={{fontSize: "18px" , color: "white"}}>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
							id ligula porta felis euismod semper. Praesent commodo cursus magna,
							vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
						</p>
					</div>
			</div>
			<div className="row">
				<div className="col-12 details">
						<div className="col-2 mt-5">
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Name
							</h3>
							<h3 style={{fontSize: "18px", color: "white"}}>
								{details.name}
								
							</h3>
						</div>
						<div className="col-2 mt-5">
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Climate
							</h3> : 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Birth Year
							</h3>}
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.climate}</h3> : 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.birth_year}</h3>}
						</div>
						<div className="col-2 mt-5">
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Diameter
							</h3> : 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Gender
							</h3>}
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.diameter}</h3> : 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.gender}</h3>}
						</div>
						<div className="col-2 mt-5">
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Gravity
							</h3> : 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Height
							</h3>}
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.gravity}</h3> : 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.height}</h3>}
							
						</div>
						<div className="col-2 mt-5">
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Population
							</h3> : 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Skin Color
							</h3>}
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.population}</h3> : 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.skin_color}</h3>}
						</div>
						<div className="col-2 mt-5">
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Terrain
							</h3> : 
							<h3 style={{fontSize: "18px", color: "gold"}}>
								Eye Color
							</h3>}
							{actions.whichType(type) ? 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.terrain}</h3> : 
							<h3 style={{fontSize: "18px", color: "white"}}>{details.eye_color}</h3>}
						</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
