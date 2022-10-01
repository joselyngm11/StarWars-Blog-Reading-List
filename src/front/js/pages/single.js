import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

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
		<div className="jumbotron">
			<h1 className="display-4">{details.name}</h1>
			<img src={rigoImageUrl} />
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
