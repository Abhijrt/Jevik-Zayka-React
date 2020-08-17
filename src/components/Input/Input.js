import React, { Component, createRef } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputActive: false,
      inputRef: createRef(),
    };
  }

  handleInputClick = () => {
    this.setState({
      inputActive: true,
    });
  };

  handleOnChangeInner = () => {
    if (this.state.inputRef.current.value.length === 0) {
      this.setState({ inputActive: false });
    } else {
      this.setState({ inputActive: true });
    }
  };

  handleOnPointerCancle = () => {
    if (this.state.inputRef.current.value.length === 0) {
      this.setState({ inputActive: false });
    }
  };

  render() {
    const { width, label, type, required } = this.props;
    return (
      <div className="input-container" style={{ width: width }}>
        <div
          className={
            this.state.inputActive ? 'wrapper wrapper-active' : 'wrapper'
          }
        >
          <input
            type={type}
            className={this.state.inputActive ? 'input-active' : ''}
            onClick={this.handleInputClick}
            onChange={this.handleOnChangeInner}
            onMouseLeave={this.handleOnPointerCancle}
            ref={this.state.inputRef}
            required={required}
          />
          <div
            className={
              this.state.inputActive
                ? 'placeholder placeholder-active'
                : 'placeholder'
            }
          >
            {label}
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
