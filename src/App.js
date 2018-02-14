import React, { Component } from 'react';
import './App.css';
import CheckboxTree from 'react-checkbox-tree';
import {nodes, nodes2, nodes3, nodes4, nodes5} from './nodes';




class App extends Component {
  constructor(props){
      super(props);


      this.state = {
                L100:[],
        L100expanded:[],
                L200:[],
        L200expanded:[],
                L300:[],
        L300expanded:[],
                L400:[],
        L400expanded:[],
                L500:[],
        L500expanded:[],
        Subject    : '',
        Template   : '',
        Scale      : '',
        Assingee   : '',
        Participants:'',
        Type:        ''
                };

      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleUserInput(e){
    
    const value = e.target.value;
    const name = e.target.name


    this.setState({
      [name] : value
    })
  }

    handleClick(e) {
      const name = e.target.name;
      const value = e.target.value;
    this.setState(({
      [name]: value
    }));
  }



  render() {

    return (
      <div className="full ui form">
      <div className="all ui raised segment">

        <div className="App ">
              <CheckboxTree 
                nodes={nodes}
                checked={this.state.L100}
                expanded={this.state.L100expanded}
                onCheck={L100 => this.setState({ L100 })}
                onExpand={L100expanded => this.setState({ L100expanded })}
            />

      
        </div>

         <div className="App">
              <CheckboxTree
                nodes={nodes2}
                checked={this.state.L200}
                expanded={this.state.L200expanded}
                onCheck={L200 => this.setState({ L200 })}
                onExpand={L200expanded => this.setState({ L200expanded })}
            />
        </div>

        <div className="App">
              <CheckboxTree
                nodes={nodes3}
                checked={this.state.L300}
                expanded={this.state.L300expanded}
                onCheck={L300 => this.setState({ L300 })}
                onExpand={L300expanded => this.setState({ L300expanded })}
            />
        </div>

            <div className="App">
              <CheckboxTree
                nodes={nodes4}
                checked={this.state.L400}
                expanded={this.state.L400expanded}
                onCheck={L400 => this.setState({ L400 })}
                onExpand={L400expanded => this.setState({ L400expanded })}
            />
        </div>

            <div className="App">
              <CheckboxTree
                nodes={nodes5}
                checked={this.state.L500}
                expanded={this.state.L500expanded}
                onCheck={L500 => this.setState({ L500 })}
                onExpand={L500expanded => this.setState({ L500expanded })}
            />
        </div>
      </div>

  <div className="left ui raised segments">

          <div className="ui buttons segment">
            <button type="radio" className="ui button">Procedure</button>
            <button type="radio" className="ui button">Tasks</button>
            <button type="radio" className="ui button">Dropdown</button>
            <button type="radio" className="ui button">TIME ENTRIES</button>
        </div>

        <div className="ui segment">
            <select className="ui dropdown" onChange={this.handleUserInput} value={this.state.Template} name="Template">
              <option>Select Template</option>
              <option value="firstTemplate">First Template</option>
            </select>
            <a >Create Manually</a>
            <a >Narratives <i className="settings"></i></a>
          </div>

        <div className="ui segment">
            Subject
            <input onChange={this.handleUserInput} value={this.state.Subject} name="Subject"/>
            Scale
            <select className="ui dropdown" onChange={this.handleUserInput} value={this.state.Scale} name="Scale" >
              <option value="small">small</option>
              <option value="medium">medium</option>
            </select>
        </div>

        <div className="ui segment">
            Assingee

            <select className="ui dropdown" onChange={this.handleUserInput} value={this.state.Assingee} name="Assingee">
              <option>Select Assingee </option>
              <option value="medium">medium</option>
            </select>

            Task Code
            <select className="ui dropdown" onChange={this.handleUserInput} value={this.state.TaskCode} name="TaskCode">
              <option>Select Code</option>
              <option value="medium">medium</option>
            </select>
        </div>

        <div className="ui buttons segment" >Type 
          <button  className="ui button"                onClick={this.handleClick} name="Type" value="NonCritical">Non Critical</button>
          <button type="checkbox" className="ui button" onClick={this.handleClick} name="Type" value="CriticalDeadLine">Critical Deadline</button>
          <button type="checkbox" className="ui button" onClick={this.handleClick} name="Type" value="CriticalEvent">Critical Event</button>
        </div>

        External Participants

        <div className="ui segment" >
          <textarea cols="50" rows="1" onChange={this.handleUserInput} value={this.state.Participants} name="Participants"/><br/>
          Each participant seperated by a semicolon
        </div>







  </div>



 {console.log(this.state)}
      </div>
    );
  }
}

export default App;


