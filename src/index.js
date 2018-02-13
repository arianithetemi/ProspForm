import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Comp from './components/Comp';

const titles = {
	L100 : 'L100 Case assesment, Development and Admin',
	L200 : 'L200 Pre-Trial Pleadings and Motions',
	L300 : 'L300 Discovery',
	L400 : 'L400 Trial Preperation and Trial',
	L500 : 'L500 Appeal'

}



class App extends Component {



	render(){


		return (	
					<div>
					<div style={{border: "2px solid gray", width : "50%", float:"left"}}>
						<Form name={titles.L100} sub={"other"}/>
						<Form name={titles.L200} sub={"other"}/>
						<Form name={titles.L300} sub={"other"}/>
						<Form name={titles.L400} sub={"other"}/>
						<Form name={titles.L500} sub={"other"}/>
						</div>

						<div style={{border: "2px solid gray", width : "50%", display: "inline-block" }} >
						<Comp />
						</div>
					</div>

				);

	}
}



ReactDOM.render(<App/>, document.querySelector('.container'));