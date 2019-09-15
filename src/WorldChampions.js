import React from "react";

function WorldChampions(props) {
	return (
		<div>{
			props.drivers
				.filter(driver => driver.isWorldChampion)
				.map(driver => (
					<label></label>
				))
		}</div>
	);
}

export default WorldChampions;
