import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Image } from "react-bootstrap";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { type,theid } = useParams();

	useEffect(() => {
		const getDetails = async ()=>{
			let response = await fetch(`"https://swapi.dev/api/${type}/${theid}/`)
			let data = response.json()
			console.log(data);
		};
		getDetails();
	}, [])

	return (
		<div id="About" className="container text-center border">
			<div className="row p-5 mt-5">
					<div className="col-md-8 border">
						<h3 fw-bold style={{fontSize: "37px", color: "white"}}>
							This First Heading <span>Will Catch Your Eye</span>
						</h3>
						<p className="border" style={{fontSize: "18px" , color: "white"}}> Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
							id ligula porta felis euismod semper. Praesent commodo cursus magna,
							vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
						</p>
					</div>
					<div className="col-4 border">
						{/* <Image src="../website/assets/img/1.jpg" className="rounded-circle mw-100" alt="keyboard"> */}
					</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
