import React from "react";

function Actors(props) {
	return (
		<div>{
			props.names.map(name => (
				<p></p>
			))
		}</div>
	);
}
export default Actors;
