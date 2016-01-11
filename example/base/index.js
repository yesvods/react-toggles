import React from 'react';
import ReactDOM from 'react-dom';
import Toggles from '../../lib';

class Example extends React.Component {
  constructor(){
    super();
    this.state = {
      toggle60: true,
      toggle120: true,
      toggle180: false,
    };
  }
  render(){
    return (
      <span>
        <div><span>60px</span>
          <Toggles
            size="60px"
            id="react-toggles-60"
            checked={this.state.toggle60}
            onChange={flag => {
              this.setState({toggle60: flag});
            }}/></div>
        <div><span>120px</span>
          <Toggles
            size="120px"
            id="react-toggles-120"
            checked={this.state.toggle120}
            onChange={flag => {
              this.setState({toggle120: flag});
            }}/></div>
        <div>
          <span>180px</span>
          <Toggles
            size="180px"
            id="react-toggles-180"
            checked={this.state.toggle180}
            onChange={flag => {
              this.setState({toggle180: flag});
            }}/>
        </div>
      </span>
    )
  }
}
ReactDOM.render(<Example/>, document.body);