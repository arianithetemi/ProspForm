import React from 'react';
import CheckboxTree from 'react-checkbox-tree';

 
const nodes = [{
    value: 'L100 Case Assesment',
    label: 'L100 Case Assesment ',
    children: [
        { value: 'Facts', label: 'Facts' },
        { value: 'Analysis', label: 'Analysis' },
    ],
}];
 
export default class Widget extends React.Component {
    constructor() {
        super();
 
        this.state = {
            checked: [],
            expanded: [],
        };
    }
 
    render() {
        
        return (
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}

            />
        );
    }
}
