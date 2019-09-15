import React from "react";

function Actors(props) {
	return (
		<div>{
			props.actors.map(player => (
				<p key={player.name}></p>
			))
		}</div>
	);
}
export default Actors;
