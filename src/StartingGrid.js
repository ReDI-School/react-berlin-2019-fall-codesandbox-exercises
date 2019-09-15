import React from "react";

function StartingGrid(props) {
	return (
		<div>{
			props.teams
				.reverse()
				.map((team, index) => (
					<div className='position'>

					</div>
				))
		}</div>
	);
}
export default StartingGrid;
