import React from 'react';


export default class Comp extends React.Component {



	render(){
		return (
			<div>
							<div>
				<button type="radio">Procedure</button>
				<button type="radio">Tasks</button>
				<button type="radio">Dropdown</button>


				</div>
					<select>
						<option>Select Template</option>
					</select>
					<a href="#" >Create Manually</a>
					<a href="#" >Narratives</a>
				<div>
					Subject
					<input />
					Scale
					<select>
						<option>small</option>
						<option>medium</option>
					</select>
				</div>
				<div>
					Assingee
					<select>
						<option>Select Assingee	</option>
						<option>medium</option>
					</select>
					Task Code
					<select>
						<option>Select Code</option>
						<option>medium</option>
					</select>
				</div>
				<div>Type 
				<button type="radio">Non Critical</button>
				<button type="radio">Critical Deadline</button>
				<button type="radio">Critical Event</button>


				</div>
				External Participants
				<div>
				<textarea cols="50" rows="1"/>
				Each participant seperated by a semicolon
				</div>







			</div>
			)
	}

}

