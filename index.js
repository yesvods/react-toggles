import React from 'react';
import ReactDOM from 'react-dom';
import Toggles from '../../src';

class Example extends React.Component {
  render(){
    return (
      <span>
        <div><span>60px</span>
          <Toggles
            size="60px"
            id="react-toggles-60"
            defaultChecked
            onChange={(e, flag) => {
              console.log(flag)
            }}/></div>
        <div><span>120px</span>
          <Toggles
            size="120px"
            id="react-toggles-120"
            defaultChecked
            onChange={(e, flag) => {
              console.log(flag)
            }}/></div>
        <div>
          <span>180px</span>
          <Toggles
            size="180px"
            id="react-toggles-180"
            defaultChecked={false}
            onChange={(e, flag) => {
              console.log(flag)
            }}/>
        </div>
      </span>
    )
  }
}
ReactDOM.render(<Example></Example>, document.body);