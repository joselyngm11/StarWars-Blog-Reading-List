import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardP from "../component/Card.jsx";
// import Table from 'react-bootstrap/Table';
// import HorizontalScroll from 'react-scroll-horizontal'


export const Home = () => {
	const { store, actions } = useContext(Context);
	// const [ people, setPeople ] = useState([])
	// const [ planets, setPlanets ] = useState([])

	// const getPeople = async () => {
	// 	try {
	// 		const response = await fetch("https://swapi.dev/api/people");
	// 		const data = await response.json();
	// 		setPeople(data.results);
			
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// const getPlanets = async () => {
	// 	try {
	// 		const response = await fetch("https://swapi.dev/api/planets");
	// 		const data = await response.json();
	// 		setPlanets(data.results);
			
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// useEffect(() => {
	// 	actions.getPeople();
	// 	actions.getPlanets();
	// 	// getPeople();
	// 	// getPlanets();
	// }, [])

	return (
		<div className="mt-5">
			<h1 className="sectionTitle">Characters</h1>
			<div className="scroll">
				{store.people.map((person,index)=>{
					return(
						<CardP 
							className="carta"
							key={person.name}
							detail={person}
							type="people"
							id={index + 1} 
						/>
					);
				})}
			</div>
			<h1 className="sectionTitle">Planets</h1>
			<div className="scroll">
				{store.planets.map((planet,index)=>{
					return(
						<CardP 
							className="carta"
							key={planet.name}
							detail={planet}
							type="planets"
							id={index + 1} 
						/>
					);
				})}
			</div>
			{store.favorites.map((favorite)=>{
				return <h1 key={favorite.name}>{favorite.name}</h1>
			})}
		</div>
		/* <HorizontalScroll className="scroll" style={{overflow: 'unset'}}> */
		/* </HorizontalScroll> */
	);
};
