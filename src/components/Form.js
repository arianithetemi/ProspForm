import React from 'react';


export default class Form extends React.Component {



	render(){
		return (
			<form>
			<div>
			<input type="checkbox"/>
			{this.props.name}
			</div>
			<input type="checkbox"/>
			{this.props.sub}
			<input type="checkbox"/>
			{this.props.sub}
			</form>

			)
	}

}

