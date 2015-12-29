import React from 'react';
import noop from 'noop3';
import style from './index.scss';

export default
class Toggle extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  static defaultProps = {
    size: '64px',
    id: 'toggle',
    formName: 'formToggle',
    onChange: noop,
    defaultChecked: true,
  };
  render(){
    
    return (
  <span className={style.wrapper}>
    <input 
      type="checkbox"
      id={this.props.id}
      name={this.props.formName}
      checked={typeof this.state.checked === 'boolean'?this.state.checked:this.props.defaultChecked}
      onChange={e => {
        let flag = e.target.checked;
        this.props.onChange(e, flag);
        this.setState({checked: flag});
      }}/>
    <label
      className={style.bar}
      htmlFor={this.props.id}
      style={{
        width: this.props.size,
        height: `${(parseInt(this.props.size)-4)/2+4}`,
      }}>
    </label>
    <label
      className={style.toggleButton}
      htmlFor={this.props.id}
      style={{
        width: `${(parseInt(this.props.size)-4)/2}`,
        height: `${(parseInt(this.props.size)-4)/2}`,
      }}>
    </label>
  </span>
    )
  }
}