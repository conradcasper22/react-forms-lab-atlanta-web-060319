import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleMessage(e)} />
        <div style={{color: "green"}}>Remaining Characters: {(this.props.maxChars - this.state.message.length)}</div>
      </div>
    );
  }
}

export default TwitterMessage;
