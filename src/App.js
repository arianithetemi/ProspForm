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
        L500expanded:[]
                };

      this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name


    this.setState({
      [name] : value
    })
  }



  render() {

    return (
      
      <div className="all">

        <div className="App">
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



 {console.log(this.state)}
      </div>
    );
  }
}

export default App;


